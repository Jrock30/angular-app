import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /**
   * 이 컴포넌트는 실제로 최상의 앱 컴포넌트가 아니다.
   * 최상의 는 app.module.ts 이다. 여기에서 여러 컴포넌트 공유하는 providers 인스턴스 를 셋팅
   */
  // providers: [AccountsService]
})
export class AppComponent implements OnInit { // 일반적인 Component 이기도 하지만 root Component 이기 때문에 특별하다.
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  // numbers = [1, 2, 3, 4, 5]
  oddNumbers = [1, 3, 5]
  evenNumbers = [2, 4]
  onlyOdd = false
  value = 10
  accounts: {name: string, status: string}[] = []

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts // 생성자에서 행해지면 안되고 라이프사이클 init 에서
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!'
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1)
  }
}

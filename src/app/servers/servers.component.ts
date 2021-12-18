import { Component, OnInit } from '@angular/core';
import {ServersService} from "./servers.service";

@Component({
  // selector: '[app-servers]', // 속성별로 엘리먼트를 선택할 수 있다.(배열로 사용하려면 사용하는 곳에서 직접 <app-servers> 형식으로 사용하는 것이 아니고 <div app-servers> 이런식으로 사용해야함(커스텀 속성 추가)
  // selector: '.app-servers', // .을 붙이면 클래스에 속성으로 사용가능 / id 는 안됨
  // template: `<app-server></app-server><app-server></app-server>`, // templateUrl -> template ( 컴포넌트 파일을 불러오지 않고 인라인으로 바로 사용 가능)
  // styles: [`h3 {color: red;}`], // styleUrls -> styles ( 스타일 파일을 불러오지 않고 인라인으로 바로 사용 가능)
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server was created'
  serverName = 'TestServer'
  serverCreated = false
  servers = ['server', 'server2']
  public servers2: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) {
    setTimeout(() => {
      this.allowNewServer = true
    },2000)
  }

  ngOnInit(): void {
    this.servers2 = this.serversService.getServers();
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was Created' + this.serverName
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value // event.target 으로만 해도 되고 이 처럼 명시적 캐스팅 해도 됨.
  }
}

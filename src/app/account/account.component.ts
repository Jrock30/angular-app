import { Component, Input } from '@angular/core';
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  /**
   * 의존성 주입을 위해 providers 에게 알려줘야 한다. 무엇을 주입할지, 컴포넌트를 빌드할때 인스턴스를 만듦
   *
   * providers: [AccountsService]
   * 상위 컴포넌트에서 Service 인스턴스를 사용하고 있다면 자식 컴터넌트에서 providers 에 추가하지 말도록.
   * 추가하게 되면 새 인스턴스가 생성되고 상위 컴포넌트의 인스턴스와 별개로 생성 된다.
   *
   * Log 또한 Service 로그 이므로 전역에(app.module.ts) 설정하고 서비스로 옮기도록 하자.
   */
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status) // 서비스 로그 이므로 여기서 호출하지 말고 서비스로 옮기도록 하자.
    /**
     * 서비스 EventEmitter 를 사용하여 이벤트를 방출(emit)
     * 다른곳에 받아서 사용 (new-account)
     */
    this.accountsService.statusUpdated.emit(status)
  }
}

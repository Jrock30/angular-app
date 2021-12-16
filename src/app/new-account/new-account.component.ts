import { Component } from '@angular/core';
import {LoggingService} from "../logging/logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  /**
   * 의존성 주입을 위해 providers 에게 알려줘야 한다. 무엇을 주입할지, 컴포넌트를 빌드할때 인스턴스를 만듦
   *
   * providers: [AccountsService]
   * 상위 컴포넌트에서 Service 인스턴스를 사용하고 있다면 자식 컴터넌트에서 providers 에 추가하지 말도록.
   * 추가하게 되면 새 인스턴스가 생성되고 상위 컴포넌트의 인스턴스와 별개로 생성 된다.
   *
   * Log 또한 Service 로그 이므로 전역에(app.module.ts) 설정하고 서비스로 옮기도록 하자.
   */
  providers: [LoggingService]
})
export class NewAccountComponent {
  // 의존성 주입, 생성자 주입 providers 를 통해
  constructor(private accountService: AccountsService) {
    /**
     * 서비스에서 생성한 이벤트를 account 에서 emit 하고 여기에서 잡는다.
     * EventEmitter 가 결국 옵저버블(observable)을 래핑해서 여기서 구독함.
     */
    this.accountService.statusUpdated.subscribe((status: string) => {
      alert('New Status: ' + status)
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange((accountStatus)) // 서비스 로그 이므로 여기서 호출하지 말고 서비스로 옮기도록 하자.
  }
}

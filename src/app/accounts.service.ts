import {LoggingService} from "./logging/logging.service";
import {EventEmitter, Injectable} from "@angular/core";

/**
 * Angular 6 ++
 *   이 새로운 구문을 사용하는 것은 완전히 선택사항 이며, 기존구문 (`providers[]`사용)은 여전히 작동합니다.
 *   하지만 '새 구문'은 한 가지 이점을 제공합니다.
 *   Angular 에서 서비스를 지연 로드할 수 있고(배후에서),
 *   중복 코드를 자동으로 제거할 수 있습니다.
 *   이렇게 하면 성능과 로드속도가 향상될수있지만, 일반적으로 더 큰서비스 및 앱에만 적용됩니다.
 *
 *   즉 providers 에 셋팅하지 않고 이렇게 인젝터블을 주어도 된다
 */
@Injectable({providedIn: 'root'})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ]

  /**
   * 서비스에 서비스를 의존성 주입
   *  - 메타데이터가 있어야 한다. (@Injectable, receiving service 라 한다)
   */
  constructor(private loggingService: LoggingService) {}

  /**
   * 이벤트 발생 또한 서비스에서 관리하면 편할 수 있다.(이벤트 생성)
   * EventEmitter 가 결국 옵저버블(observable)을 래핑
   */
  statusUpdated = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status})
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status
    this.loggingService.logStatusChange(status);
  }
}

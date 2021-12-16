import {Injectable} from "@angular/core";

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
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status)
  }
}

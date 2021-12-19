import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean; // 옵저버블 반환
}

/**
 * CanDeactivate 인터페이스(CanComponentDeactivate) 구현을 강제하도록 래핑함.
 * CanDeactivateGuard 를 쉽게 연결할 수 있도록 설정. 추상화
 * 구현체를 app.module.ts 와 app-routing.module.ts 에 모듈 등록 해준다(인젝션) 해준다
 * 사용하는 곳 edit-server-component 클래스에서 CanComponentDeactivate 인터페이스를 상속 받아 구현한다.
 */
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }

}

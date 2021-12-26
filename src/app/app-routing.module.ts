import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {Server2Component} from "./servers/server/server2.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactive-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolver} from "./servers/server/server-resolver.service";
import {Home2Component} from "./home2/home2.component";
import {User2Component} from "./user2/user2.component";

const appRoutes: Routes = [ // 라우트 설정
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent }, // 파람 값 넣음
    ]
  },
  // canActivate (라우터 가드) -> 모든 자식에게 적용 된다.
  { path: 'servers',
    // canActivate: [AuthGuard], // 자신 및 자식 모두 라우터 가드, /servers 부터 막음.
    canActivateChild: [AuthGuard], // 자식만 모두 라우터 가드, /servers 는 접근 가능 하고 /servers/.. 부터 가드 발동 즉 자식 라우터 가드
    component: ServersComponent,
    children: [ // 자식 라우터(중첩 라우터)
      // 리졸버 적용 키 값은 맘대로 해도 됨.
      { path: ':id', component: Server2Component, resolve: {server: ServerResolver} },
      // canDeactivate 적용 canActivate 아님 **주의**
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  // PageNotFoundComponent 처럼 정적아 아니고 동적으로 데이터도 바꾸고 에러 페이지를 출력할 수 있도록. / 재사용을 위한
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  {path: 'home', component: Home2Component},
  {path: 'user2/:id', component: User2Component},
  { path: '**', redirectTo: '/not-found' }, // 와일드카드 경로 리다이렉션, 마지막 경로에 추가할 것 순서되로 실행 됨.
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes, {useHash: true}) // 해시모드 (#)
  ],
  exports: [RouterModule] // 앵귤러에게 이 모듈에서 왔어라고 알려줌
})
export class AppRoutingModule {

}

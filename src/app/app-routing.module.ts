import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {Server2Component} from "./servers/server/server2.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [ // 라우트 설정
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent }, // 파람 값 넣음
    ]
  },
  { path: 'servers', component: ServersComponent,
    children: [ // 자식 라우터(중첩 라우터)
      { path: ':id', component: Server2Component },
      { path: ':id/edit', component: EditServerComponent },
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }, // 와일드카드 경로 리다이렉션, 마지막 경로에 추가할 것 순서되로 실행 됨.
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule] // 앵귤러에게 이 모듈에서 왔어라고 알려줌
})
export class AppRoutingModule {

}

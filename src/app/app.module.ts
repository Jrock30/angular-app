import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from "./warning-alert/warning-alert.component"; // 확장자는 웹팩에서 자동 추가
import { FormsModule } from "@angular/forms";
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import {BasicHighlightDirective} from "./basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import {AccountComponent} from "./account/account.component";
import {NewAccountComponent} from "./new-account/new-account.component";
import {AccountsService} from "./accounts.service";
import {LoggingService} from "./logging/logging.service";
import {UserComponent} from "./users/user/user.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ServersService} from "./servers/servers.service";
import {Server2Component} from "./servers/server/server2.component";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [ // Angular 에게 Component 등록한다.(알려준다), 선언
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    Server2Component,
    PageNotFoundComponent
  ],
  imports: [ // 모듈을 추가한다.
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  /**
   *  providers 사용하지 않고
   *  @Injectable({providedIn: 'root'}) 로 서비스에서 직접 사용
   */
  // providers: [AccountsService, LoggingService], // 최상위 설정, 여기에 설정하면 인스턴스를 공유한다. (해당 컴포넌트에서 재 설정하지 않는 이상)
  providers: [ServersService],
  bootstrap: [AppComponent] // Angular 가 실행 시점에 어떤 컴포넌트를 알아야 하는지 알려주는 역
})
export class AppModule { }

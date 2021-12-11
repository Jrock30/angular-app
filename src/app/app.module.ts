import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from "./warning-alert/warning-alert.component"; // 확장자는 웹팩에서 자동 추가
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ // Angular 에게 Component 등록한다.(알려준다), 선언
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [ // 모듈을 추가한다.
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Angular 가 실행 시점에 어떤 컴포넌트를 알아야 하는지 알려주는 역
})
export class AppModule { }

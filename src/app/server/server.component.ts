import { Component } from "@angular/core"; // Angular 핵심 기능

/**
 * 데코레이터는 클래스를 향상시킬 수 있는 TypeScript 기능
 */
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html', // 결국 이것은 모두 webpack 에 의해 번들로 제공되므 HTML 파일의 위치를 상대경로로 알려준다.
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {

  serverId: number = 10
  serverStatus: string = 'offline'

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus() {
    return this.serverStatus
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}

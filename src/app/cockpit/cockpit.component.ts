import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /**
   * 이벤트 emmit(방출)
   * @Output 이벤트를 다른곳에서 사용할 수 있도록 방출한다. , 외부에서 수신할 수 있도록
   * 인수를 주게 되면 외부에서 해당 이름으로만 접근할 수 있다.
   */
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>()
  newServerName = ''
  newServerContent = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
    // emit 이벤트 실행
    this.serverCreated.emit({
      serverName: this.newServerName, serverContent: this.newServerContent
    })
  }

  onAddBlueprint() {
    // emit 이벤트 실행
    this.blueprintCreated.emit({
      serverName: this.newServerName, serverContent: this.newServerContent
    })
  }
}

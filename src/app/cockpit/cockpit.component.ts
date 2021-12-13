import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

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
  // newServerName = ''
  // newServerContent = ''
  /**
   * 로컬참조
   * 로컬 참조를 ViewChild 를 통해 가져올 수 있다. 인수 필수 (element 그 자체 이다.)
   * .html 에서의 #serverContentInput 를 직접 가져온 것 이다.
   * 사용 - this.serverContentInput.nativeElement.value
   */
  @ViewChild('serverContentInput') serverContentInput: ElementRef

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // emit 이벤트 실행
    this.serverCreated.emit({
      // serverName: this.newServerName,
      // serverContent: this.newServerContent
      serverName: nameInput.value, // 로컬 참조
      serverContent: this.serverContentInput.nativeElement.value
    })

  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = 'TEST' // 이런식으로 작성하지 말자. 이렇게 쓸바에는 양방향 바인딩 쓰자.
    // emit 이벤트 실행
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      // serverContent: this.newServerContent
      serverName: nameInput.value, // 로컬 참조
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}

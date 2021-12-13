import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // 속성을 주지 않으면 기본으로 Emulated 이고(해당 컴포넌트.css 에만 적용이 된다), None 으로 주면 속성 엘리먼트가 추가 되지 않는다. (뷰 캡슬화를 사용하지 않는다.) 이렇게 되면 해당 컴포넌트.css 파일이 전역으로 적용이된다(css 를 덮어씀).
})
export class ServerElementComponent implements OnInit {
  /**
   * @Input 엘리먼트를 노출한다.(다른 컴포넌트에서 바인딩 가능), 커스텀 바인딩
   * 외부에서 접근할 수 있도록.
   * 인수를 주게 되면 외부에서 해당 이름으로만 접근할 수 있다.
   */
  @Input('srvElement') element: {type: string, name: string, content: string}

  constructor() { }

  ngOnInit(): void {
  }

}

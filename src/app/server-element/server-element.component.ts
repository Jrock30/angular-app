import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
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

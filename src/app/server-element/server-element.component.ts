import {
  Component,
  Input,
  OnInit,
  OnChanges,
  ViewEncapsulation,
  SimpleChanges,
  DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // 속성을 주지 않으면 기본으로 Emulated 이고(해당 컴포넌트.css 에만 적용이 된다), None 으로 주면 속성 엘리먼트가 추가 되지 않는다. (뷰 캡슬화를 사용하지 않는다.) 이렇게 되면 해당 컴포넌트.css 파일이 전역으로 적용이된다(css 를 덮어씀).
})
export class ServerElementComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  /**
   * @Input 엘리먼트를 노출한다.(다른 컴포넌트에서 바인딩 가능), 커스텀 바인딩
   * 외부에서 접근할 수 있도록.
   * 인수를 주게 되면 외부에서 해당 이름으로만 접근할 수 있다.
   */
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: string
  @ViewChild('heading',{static:true}) header: ElementRef // 로컬 참조 #heading
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef

  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) { // 값이 변경되면 실행되는 훅
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit(): void { // 초기화 되고 실행되는 훅
    console.log('ngOnInit called!')
    /**
     * 이 떄는 참조가 되지 않음 @ViewChild, @ContentChild
     * DOM 이 아직 완전히 렌더링 되지 않았기 떄문에 일부 엘리먼트의 값을 확인 할 수 없다.
     */
    console.log('@ViewChild >>> ', this.header.nativeElement.textContent)
    console.log('@ContentChild >>> ', this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() { // 변경 사항을 확인할 때마다 호출
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() { // content 초기화 실행, ex) <ng-content></ng-content> 영역
    console.log("ngAfterContentInit called!")
    /**
     * 이 떄는 참조가 됨 @ContentChild
     * DOM 이 렌더링 되었기 때문에 엘리먼트의 값을 확인할 수 있다.
     */
    console.log('@ContentChild >>> ', this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() { // content 감지
    console.log("ngAfterContentChecked called!")
  }

  ngAfterViewInit() { //
    console.log("ngAfterViewInit called!")
    /**
     * 이 떄는 참조가 됨 @ViewChild
     * DOM 이 렌더링 되었기 때문에 엘리먼트의 값을 확인할 수 있다.
     */
    console.log('@ViewChild >>> ', this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() { //
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy() { // 컴포넌트가 파괴(제거) 되면 실행
    console.log("ngOnDestroy called!")
  }

}

import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string // 커스텀 바인딩 사용
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'// - (dash) 를 입력하면 안된다고 함. 카멜 사용, 렌더러 보다 더 편하게 사용 가능
  // @HostBinding('style.padding') padding: string = '20px'

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor
    /**
     * 직접 돔에 접근해서 변경하는 것은 좋지 않다.
     * Angular 는 실제로 DOM 없이 템플릿을 렌더링 할 수도 있고, 이러한 속성을 사용하지 못할 수도 있기 때문이다.
     * Angular 는 브라우저에 실행되는 것에 국한 되지 않는다. 예를들어 서비스 작업자와도 작동하며, 돔에 엑세스할 수 없는 환경이라면
     * native 엘리먼트와 이 엘리먼트의 스타일에 직접 엑세스 하면, 돔을 변경하려고 하면 일부 상황에서 오류가 발생할 수 있다.
     *
     * *** 이 처럼 렌더러를 사용하자. ***
     *
     * 아래는 렌더러를 사용하지만 정적이기 때문에 @HostListener 처럼 동적 이벤트를 받아서 사용하면 더 좋다.
     *
     * 렌더러 보다 더 편하게 사용할 수 있는 것이 @HostBinding 이다
     */
    // this.elRef.nativeElement.style.backgroundColor = 'green'
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  /**
   * 입력 인수는 이름이다.(이벤트명)
   * 더 많은 이벤트는 @HostListener 를 찾아보자
   */
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    // this.backgroundColor = 'blue'
    this.backgroundColor = this.highlightColor
    // this.padding = '50px'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    // this.backgroundColor = 'transparent'
    this.backgroundColor = this.defaultColor
    // this.padding = '20px'
  }
}

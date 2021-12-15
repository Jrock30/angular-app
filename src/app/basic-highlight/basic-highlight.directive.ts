import {Directive, ElementRef, OnInit} from "@angular/core";

/**
 * 디렉티브를 따로 설정하는 파일 및 어노테이션 ( 파일로 설정하는 디렉티브 )
 *
 * 자동으로 이 파일 또한 등록 되는 것이 아닌 것 이므로 모듈(app.module.ts)에 추가해 주자
 */
@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    /**
     * 직접 돔에 접근해서 변경하는 것은 좋지 않다.
     * Angular 는 실제로 DOM 없이 템플릿을 렌더링 할 수도 있고, 이러한 속성을 사용하지 못할 수도 있기 때문이다.
     * 렌더러를 사용하자.
     */
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }
}

import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  /**
   * 커스텀 구조적 디렉티브
   * set -> 기술적으로 메서드로 바꾼다, 속성이 변경될 때마다 실행되는 메서드
   * 사용하는 곳 이름과 셀렉터 이름과 같아야한다. *appUnless 로 사용
   */
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // 뷰 컨테이너 생성, 뷰는 단순히 템플릿 참조이다.
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      // 돔 위치에서 모든 것을 제거
      this.vcRef.clear()

    }
  }

  // 템플릿을 받는다., 뷰컨테이너를 받는다.
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

# Angular App Study
- Angular Cli
  - npm install -g @angular/cli@latest
  - ng new angular-app --no-strict
  - cd angular-app
  - ng serve
  - ng generate component {name}, ng g c {name} ( 컴포넌트 팩으로 생성 )
  - ng generate directive {name}, ng g d {name} ( Directive 팩으로 생성 )
  - ng g c {name} --skip-tests ( 테스트 파일 생성 X 옵션 )
- Library
  - npm install --save bootstrap@3
    - angular.json -> styles: ["node_modules/bootstrap/dist/css/bootstrap.min.css"] 추가
      - version 6 이상은 위처럼 (angular.json), 이하는 ../ 상대경로 줄 것 (angular-cli.json)
---
## Angular 설명  
- EntryPoint
  - main.ts -> app.module.ts -> app.component.ts
  - 다 어노테이션으로 셋팅한다.
  - index.html 에서는 CLI 가 각종 스크립트를 import 한다


- Components
  - Angular 의 핵심이다.
  - 각 컴포넌트에는 고유한 템플릿이 있고, 고유한 HTML 코드, 고유한 스타일, 자체 비즈니스로직이 있다.
    - 복잡한 웹페이지를 재사용 가능
  - CLI 를 통한 Component 생성(app 밑에 servers 라는 Component 생성 및 app.module.ts에 자동 적용, css, html, ts, spec.ts)
    - ng generate component servers, ng g c servers
  - Style
  - Selector
  - Module
  - Data Binding
  - Directive
  - Component 분할
  - LifeCycle
  - Custom Data Binding, Custom Event Binding Emit
  - @Input(), @Output()
  - @HostListener(리스너 바인딩 렌더러), @HostBinding(좀더 쉽게 바인딩, 이거 사용)
  - @Input() set -> 커스텀 구조적 디렉티브 사용


- Service 
  - DI (Dependency Injection)
  - Instance Share

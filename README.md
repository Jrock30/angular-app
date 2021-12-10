# Angular App Project
- Angular Cli
  - npm install -g @angular/cli@latest
  - ng new angular-app --no-strict
  - cd angular-app
  - ng serve
- Library
  - npm install --save bootstrap@3
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

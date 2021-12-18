import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string} = {id: 12, 'name': 'name'};
  paramsSubscription: Subscription; // rxjs

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = { // 라우터에서 넘긴 파람 값 가져오기, 스냅샷을 사용한 것이고, 이 또한 변경감지를 하려면 아래 처럼 구독해야함.
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    /**
     * 옵저버블, 이벤트를 구독하여 이벤트가 발생할 때 기다릴 필요 없이 일부 코드를 실행하는 쉬운 방법
     * 리로드를 안하고 변경된 코드만 바꿀 때 사용
     *   - 리로드 하면 어차피 위의 user 가 바뀌니까 상관 없는데 동적으로 구독하여 바꾸면 스냅샷 정보들은 바뀌지 않음.
     *   - 그래서 리로드 하지 않을 때는 구독으로 변경감지 할 것
     *
     * 컴포넌트가 파괴 되어도 구독정보는 원래 삭제 되지 않는다. Angular 가 직접 삭제 해줌.
     * 그러나 사용자 정의 옵저버블을 만들었다면 직접 아래의 ngOnDestroy 훅에서 처럼 구독을 취소해줘야 한다.
     *
     */
    this.paramsSubscription = this.route.params.subscribe( // 구독
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }
  ngOnDestroy() { // 컴포넌트가 파괴될 때
    /**
     * 컴포넌트가 파괴 되어도 구독정보는 원래 삭제 되지 않는다. Angular 가 직접 삭제 해줌.
     * 그러나 사용자 정의 옵저버블을 만들었다면 직접 아래의 ngOnDestroy 훅에서 처럼 구독을 취소해줘야 한다.
     */
    this.paramsSubscription.unsubscribe(); // 구독 취소

  }

}

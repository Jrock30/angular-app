import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    /**
     * Resolver(라우터 가드)를 사용하면 아래의 내용이 필요 없다. (파람 대신 사용)
     * server-resolver.service 에서 구현하고 app-routing.module 에서 이 라우터에 적용 시킴.
     * 비동기 일 떄 좋다는 데 아직 모르겠다.
     */
    // const id = +this.route.snapshot.params['id']; // + -> parseInt
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )
    this.route.data.subscribe((data: Data) => {
      this.server = data['server']; // data[key] 키 값은 라우터 설정에 넣은 키 값과 일치해야한다. 'server'

    });
  }

  onEdit() {
    /**
     * 상대경로 사용(relativeTo), 빼고 절대경로 사용해도 됨.
     * queryParamsHandling: 'merge' -> 이전 쿼리스트링과 새로운 쿼리스트링과 병합
     *                      'preserve' -> 이전 쿼리스트링을 덮어씀(새로 추가된 것에 덮어씀)
     */
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }
}

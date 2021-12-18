import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

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
    const id = +this.route.snapshot.params['id']; // + -> parseInt
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )
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

import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CanComponentDeactivate} from "./can-deactive-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  /**
   * ActivatedRoute 현재 route 정보들
   */
  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
    console.log('route >>> ', this.route);
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    // todo Subscribe route params to update the id if params change
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route}); // 한 단계 위로 이동
  }

  /**
   * 상속받은 인터페이스 구현
   * 커스텀 라우터 가드 인터페이스 구현
   */
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true; // 수정 못하는 상태면 그냥 빠져 나감.
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) { // 기존 필드와 사용자가 작성한 필드가 다른지 확인
      return confirm('Do you want to discard the changes?'); // 변경된 것이 있으면 컨펌 ok 면 빠져나가고 cancel 이면 화면 유지
    } else {
      return true; // 변경된 것이 없으면 빠져나감.
    }
  }
}

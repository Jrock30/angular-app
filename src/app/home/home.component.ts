import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { } // 라우터 생성자 주입

  ngOnInit() {
  }

  onLoadServers(id: number) {
    // 스크립트에서 라우터 이동, 파람 값과 함께 넘김
    this.router.navigate(
      ['/servers', id, 'edit'],
      {queryParams: {allowEdit: '1', fragment: 'loading'}}
    )

  }
}

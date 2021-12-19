import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ServersService} from "../servers.service";
import {Injectable} from "@angular/core";

// 파일로 뺴는 것이 좋지만 여기서는 그냥 여기에 다가 작성
interface Server {
  id: number;
  name: string;
  status: string;
}

// Resolve 구현
// Resolve 상속 받을 파람 값 직접 정의 (서버에서 내려오는 정보를 예로 듬)
@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params['id']);
  }
}

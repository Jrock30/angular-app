export class AuthService { // 임시 인증 서비스
  loggedIn = false;

  isAuthenticated() { // 서버호출 영역 (일부러 딜레이 시간 줌)
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}

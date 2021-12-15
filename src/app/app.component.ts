import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { // 일반적인 Component 이기도 하지만 root Component 이기 때문에 특별하다.
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  // numbers = [1, 2, 3, 4, 5]
  oddNumbers = [1, 3, 5]
  evenNumbers = [2, 4]
  onlyOdd = false
  value = 10

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!'
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1)
  }
}

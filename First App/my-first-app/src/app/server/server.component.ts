import {Component} from '@angular/core';
@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
   serverID:number =10;
   serverStatus='offline';
   getServerStatus(){
       return this.serverStatus;
   }
}
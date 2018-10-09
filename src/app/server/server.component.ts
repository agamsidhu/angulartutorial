import {Component} from '@angular/core';
//this is a class
@Component({
    //js object to configure
    selector: 'app-server', //html selector
    templateUrl: './server.component.html' //html for this component
})
export class ServerComponent{
    serverId = 10;
    serverStatus: string = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}
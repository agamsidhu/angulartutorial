import {Component} from '@angular/core';
//this is a class
@Component({
    //js object to configure
    selector: 'app-server', //html selector
    templateUrl: './server.component.html', //html for this component
    styles: [`
        .online{
            color:white;
        }
    `]
})
export class ServerComponent{
    serverId = 10;
    serverStatus: string = 'offline';

    constructor(){
        var mynumber = Math.random();
        this.serverStatus = mynumber > 0.5 ? 'online' : 'offline';
        console.log(mynumber);
    }
    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
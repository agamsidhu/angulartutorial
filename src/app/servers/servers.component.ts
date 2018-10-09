import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName= 'default';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },1000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  
  // onUpdateServerName(event: any){
  //   this.serverName = event.target.value;
  // }
}

import { Component, OnInit } from '@angular/core';

import { IClient } from '../../tables/client';
import { ClientService } from '../../tables/client.service';
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs'

@Component({
  selector: 'ct-pg-table',
  templateUrl: './pg-table.component.html',
  styleUrls: ['./pg-table.component.scss'],
  // clients: Observable<any[]>,
  // columns: string[];
})
export class PgTableComponent implements OnInit {
  pageTitle = 'Paginated Table';
  errorMessage = '';
  clients: import('../../tables/client').IClient[]; // style guide says consider using class instead of interface
  
  constructor(private clientService: ClientService) {
  }  
  // ~ Make number of rows method here
  // https://angular.io/api/core/QueryList
  // proly ng1: item in items | filter:x 
  // APM proly too complex
  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
        // this.filteredClients = this.clients; // get to NumOfRows later
        // this.columns = this.clients[key?];
        let columns = this.clients.keys;
        console.log("clients.keys", clients.keys);
      },
      error => this.errorMessage = <any>error
    );
  }
    
}

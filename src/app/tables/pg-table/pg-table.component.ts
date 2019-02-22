import { Component, OnInit } from '@angular/core';

// import { IClient } from '../../tables/client';
import { ClientService } from '../../tables/client.service'; // tbc

@Component({
  selector: 'pg-table',
  templateUrl: './pg-table.component.html',
  styleUrls: ['./pg-table.component.scss']
})
export class PgTableComponent implements OnInit {
  pageTitle = 'Paginated Table';
  errorMessage = '';
  
  constructor(private clientService: ClientService) { }
  
  // CLI
  // ngOnInit() {
  // }
  
  // ~ Make number of rows method here
  // https://angular.io/api/core/QueryList
  // proly ng1: item in items | filter:x 
  // APM proly too complex
  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
        this.filteredClients = this.clients;
      },
      error => this.errorMessage = <any>error
    );
  constructor() { }

}

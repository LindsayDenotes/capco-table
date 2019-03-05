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
    _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredClients = this.listFilter ? this.performFilter(this.listFilter) : this.clients;
  }

  filteredClients: IClient[] = [];

  constructor(private clientService: ClientService) {
  }

  // ~ Make number of rows method here
  // https://angular.io/api/core/QueryList
  // proly ng1: item in items | filter:x
  // APM example proly too complex
  NumOfRowsOptions = [
    5, 10, this.clients.length
    // { id: 0, name: "Perfect" },
    // { id: 1, name: "Low" },
    // { id: 2, name: "Minor" },
    // { id: 3, name: "High" },
  ];

  performFilter(filterBy: string): IClient[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.clients.filter((client: IClient) =>
      client.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      clients => {
        this.clients = clients;
        console.log('clients.keys', clients.keys);
        // this.filteredClients = this.clients; // get to NumOfRows later
        // Approach B
        // this.columns = this.clients[key?];
        // let columns = this.clients.keys;
        // console.log("clients.keys", clients.keys);
      },
      error => this.errorMessage = <any>error
    );
  }

}

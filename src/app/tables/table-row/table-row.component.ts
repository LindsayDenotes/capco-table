import { Component, OnInit, Input } from '@angular/core';
import { IClient } from '../../tables/client';
import { ClientService } from 'src/app/tables/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ct-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  errorMessage = '';
  client: IClient | undefined; // APM
  // @Input() client: id; // proly don't need both @Input AND paramMap.get below
  // @Input() columns: string[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) {
  }

  ngOnInit() {
//     // copy, paste, and change these two methods to show default NumOfRows
    const param = this.route.snapshot.paramMap.get('id'); // .getNumOfRows
    if (param) {
      const id = +param;
      this.getClient(id);
    }
  }

  getClient(id: number) {
    this.clientService.getClient(id).subscribe(
      client => this.client = client,
      error => this.errorMessage = <any>error);
  }

}

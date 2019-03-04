import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PgTableComponent } from './pg-table/pg-table.component';
import { TableRowComponent } from './table-row/table-row.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'tables', component: PgTableComponent },
      {
        path: 'table-row/:id',
        // canActivate: [TableRowGuard],
        component: TableRowComponent
      },
    ]),    
  ],
  declarations: [
    PgTableComponent,
    TableRowComponent
    // NumberOfRowsPipe
  ]
})
export class TablesModule { }

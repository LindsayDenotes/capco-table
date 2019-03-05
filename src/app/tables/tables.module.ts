import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // ~need?
import { FormsModule } from '@angular/forms';

import { PgTableComponent } from './pg-table/pg-table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TableRowGuard } from './table-row/table-row.guard';

@NgModule({
  imports: [
    CommonModule, // ~need?
    FormsModule,
    RouterModule.forChild([
      { path: 'pg-table', component: PgTableComponent },
      {
        path: 'table-row/:id', // ~shd b pg-table/:id'?
        canActivate: [TableRowGuard],
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

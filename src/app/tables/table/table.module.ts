import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';//replace table with shared
import { TableRowComponent } from '../table-row/table-row.component';//replace table with shared
//import { SharedModule } from '../shared/shared.module';//uncomment

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'tables', component: TableComponent },
      {
        path: 'table-row/:id',
        // canActivate: [TableRowGuard],
        component: TableRowComponent
      },
    ]),
    // SharedModule //uncomment
  ],
  declarations: [
    TableComponent,
    TableRowComponent
    // ConvertToSpacesPipe
  ]
})
export class TableModule { }

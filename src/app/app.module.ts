import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { TablesModule } from './tables/tables.module'; // ~move this to bottom?
// import { PgTableComponent } from './tables/pg-table/pg-table.component';
// import { TableRowComponent } from './tables/table-row/table-row.component';


@NgModule({
  // declare our app's own components, directives, and custom pipes
  declarations: [
    AppComponent,
    WelcomeComponent // ,
    // PgTableComponent,
    // TableRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    FormsModule,
    TablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

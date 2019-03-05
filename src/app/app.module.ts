import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { TablesModule } from './tables/tables.module';
import { PgTableComponent } from './tables/pg-table/pg-table.component';
import { TableRowComponent } from './tables/table-row/table-row.component';

@NgModule({
  // our app's own components, directives, and custom pipes
  declarations: [
    AppComponent,
    WelcomeComponent,
    PgTableComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    TablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

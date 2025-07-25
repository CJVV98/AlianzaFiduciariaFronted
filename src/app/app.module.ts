import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ModuleModule } from './modules/module.module';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AdminClientsComponent } from './pages/admin-clients/admin-clients.component';
import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewClientComponent } from './pages/admin-clients/new-client/new-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminClientsComponent,
    NewClientComponent,
    AdminPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    ModuleModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  exports:[AdminPagesComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { AdminClientsComponent } from './pages/admin-clients/admin-clients.component';
import { NewClientComponent } from './pages/admin-clients/new-client/new-client.component';

const routes: Routes = [
  {path: 'admin', component:AdminPagesComponent, children:[
    {path: '', component:AdminClientsComponent, children: [
        {path: 'new-client', component:NewClientComponent}
      ]
    },
   ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

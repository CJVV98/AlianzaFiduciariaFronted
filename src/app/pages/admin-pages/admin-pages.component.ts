import { Component } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { AdminClientsComponent } from '../admin-clients/admin-clients.component';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent {
  constructor(private clientServices: ClientServiceService) {}
   
  ngOnInit(): void {
    
  }
}

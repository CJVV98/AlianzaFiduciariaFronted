import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { NewClientComponent } from './new-client/new-client.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css'],
})
export class AdminClientsComponent {
  filter: string = '';
  @ViewChild(MatTable) table!: MatTable<any>;
  clients = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'dateAdd'];

  ngAfterViewInit() {
    this.clients.paginator = this.paginator;
  }
  constructor(private readonly clientServices: ClientServiceService, private readonly dialog: MatDialog) {}
  ngOnInit(): void {
     this.getClients();
  }
  getClients() {
    this.clientServices.getClients().subscribe((result: any) => {
      console.log('Clients fetched:', result.data.findAll);
          this.clients.data=result.data.findAll;
          this.table.renderRows();
      });
  }
  search(): void {
    if (this.filter.trim() === '') {
      this.ngOnInit(); 
    } else {
      this.clients.data = this.clients.data.filter(client =>
        client.name.toLowerCase().includes(this.filter.toLowerCase()) ||
        client.email.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewClientComponent, {
      width: '60vh',
      height: '70vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with result:', result);
        this.getClients() 
      }
    });
  }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientServiceService } from 'src/app/services/client-service.service';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})

export class NewClientComponent {
  formClient: FormGroup;
  constructor(private readonly dialogRef: MatDialogRef<NewClientComponent>, private readonly fb: FormBuilder,
    private readonly service: ClientServiceService
  ) {
      this.formClient = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
 }
 /**
  * Enviar el formulario para crear un nuevo cliente
  * @param formInfoClient Información del cliente a crear
  */
 send(){
  const formInfoClient = this.formClient.value;
   const client = {
      name: formInfoClient.name,  
      email: formInfoClient.email,
      phone: formInfoClient.phone,
      startDate: formInfoClient.startDate?.toISOString().split('T')[0],
      endDate: formInfoClient.endDate?.toISOString().split('T')[0]
    };
   this.service.createClient(client).subscribe({
      next: (result) => {
        this.dialogRef.close(this.formClient.value);
      },
      error: (error) => {
      }
    });
 }
 /**
  * Cerrar el dialogo sin enviar datos
  */
 close(){
  this.dialogRef.close(this.formClient.value);
 }

 
}

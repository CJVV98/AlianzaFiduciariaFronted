import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  variableReactiva = new Subject<string>();
  constructor(private readonly apollo: Apollo) {}

/**
 * Metodo para obtener todos los clientes
 * @returns listado de clientes
 */
  getClients(){
    return this.apollo.query({
      query: gql`
        query {
          findAll {
            user
            name
            email
            phone
            dateAdd
            startDate
            endDate
          }
        }
      `
    });
  }
/**
 * Metodo para crear un nuevo cliente
 * @param clientData Información del cliente a crear
 * @returns 
 */
  createClient(clientData: any) {
    console.log('Creating client with data:', clientData);
    return this.apollo.mutate({
      mutation: gql`
        mutation CreateClient($clientDto: ClientDto!) {
          createClient(clientDto: $clientDto) 
        }
      `,
      variables: {
         clientDto: clientData
      }
    });
  }
}

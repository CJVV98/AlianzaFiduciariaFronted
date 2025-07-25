import { TestBed } from '@angular/core/testing';

import { ClientServiceService } from './client-service.service';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { Client } from '../model/client';
import { ApolloQueryResult } from '@apollo/client';

interface ClientInterface {
  findAll: Client[];
}

describe('ClientServiceService', () => {
  let service: ClientServiceService;
  let apolloTest: jasmine.SpyObj<Apollo>;
  beforeEach(() => {
   const spy = jasmine.createSpyObj('Apollo', ['query']);

    TestBed.configureTestingModule({
      providers: [
        ClientServiceService,
        { provide: Apollo, useValue: spy }
      ]
  });
  service = TestBed.inject(ClientServiceService);
  apolloTest = TestBed.inject(Apollo) as jasmine.SpyObj<Apollo>;
  it('get clients', (done) => {
    const responseClient: ApolloQueryResult<ClientInterface> = {
      data: {
        findAll: [
          {
            user: 'marino',
            name: 'Marino Rojas',
            email: 'marino@example.com',
            phone: '311111111',
            dateAdd: new Date('2025-01-01'),
            startDate: new Date('2025-06-01'),
            endDate:new Date('2025-08-01')
          }
        ]
      },
      loading: false,
      networkStatus: 7
    };

    apolloTest.query.and.returnValue(of(responseClient));

    service.getClients().subscribe(response => {
      expect(response).toContain(responseClient.data.findAll);
      expect(apolloTest.query).toHaveBeenCalled();
      done();
    });
  });
});
});

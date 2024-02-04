import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Response} from '@app/core/models';

@Injectable({
  providedIn: 'root',
})
export class EntitiesService {
  constructor(private apollo: Apollo) {
  }

  getEntities(): Observable<Response> {
    return this.apollo
      .watchQuery({
        query: gql`
        query getEntities {
          getEntities {
            data {
              id
              name
              attributes{
                id
                name
              }
            }
            error
          }
        }
      `,
      })
      .valueChanges.pipe(map(({data}: any) => data.getEntities));
  }
}

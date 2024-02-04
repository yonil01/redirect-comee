import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Mutation } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class LogoutQuery extends Mutation {
  document = gql`
    mutation logout {
      logout {
        error
        data {
          id
        }
        code
        type
        msg
      }
    }
  `;
}

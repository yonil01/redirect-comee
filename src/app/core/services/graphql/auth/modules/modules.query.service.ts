import { Injectable } from '@angular/core';
import { Query, Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class GetModulesQuery extends Query<Response> {
  document = gql`
    query getModules {
      getModules {
        error
        data {
          id
          name
          description
          class
          components {
            id
            name
            url_front
            class
            module_id
            elements {
              id
              name
              description
              url_back
              component_id
            }
          }
        }
        code
        type
        msg
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class GetModulesByRoleQuery extends Query<Response> {
  document = gql`
    query getModulesByRole($ids: [ID!]!, $type: Int!) {
      getModulesByRole(ids: $ids, type: $type) {
        error
        data {
          id
          name
          description
          class
          components {
            id
            name
            url_front
            class
            module_id
            elements {
              id
              name
              description
              url_back
              component_id
            }
          }
        }
        code
        type
        msg
      }
    }
  `;
}

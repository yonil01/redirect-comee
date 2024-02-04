import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Query } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GetInfoProcedureQuery extends Query<Response> {
  document = gql`
    query getInfoProcedure($procedure: String!, $parameters: Any) {
      getInfoProcedure(input: { data: { procedure: $procedure, parameters: $parameters } }) {
        error
        data
        type
        msg
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class GetInfoReportQuery extends Query<Response> {
  document = gql`
    query getInfoReport($procedure: String!, $parameters: Any) {
      getInfoReport(input: { data: { procedure: $procedure, parameters: $parameters } }) {
        error
        data
        type
        msg
      }
    }
  `;
}

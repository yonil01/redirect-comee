import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {Response} from '@app/core/models';
import {
  GetDoctypeGroupsByDoctypeNameQuery,
  GetDoctypeFormatQuery,
  GetDoctypeDashBoardsQuery,
  GetDoctypeReportsQuery,
  PublishDoctypeQuery,
  GetDoctypeGroupsProjectRoleQuery,
  GetDocumentsByEntityValuesQuery,
  GetDoctypeGroupQuery, SearchDocumentByIDQuery,
} from '@app/core/services/graphql/retrieval/retrieval.query.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RetrievalService {
  constructor(
    private apollo: Apollo,
    private getDoctypeGroupsByDoctypeNameQuery: GetDoctypeGroupsByDoctypeNameQuery,
    private getDoctypeFormatQuery: GetDoctypeFormatQuery,
    private getDoctypeDashBoardsQuery: GetDoctypeDashBoardsQuery,
    private getDoctypeReportsQuery: GetDoctypeReportsQuery,
    private publishDoctypeQuery: PublishDoctypeQuery,
    private getDoctypeGroupsProjectRoleQuery: GetDoctypeGroupsProjectRoleQuery,
    private getDocumentsByEntityValuesQuery: GetDocumentsByEntityValuesQuery,
    private getDoctypeGroupQuery: GetDoctypeGroupQuery,
    private getDocumentByIDQuery: SearchDocumentByIDQuery,
  ) {
  }

  public getDocTypeGroups(): Observable<Response> {
    return this.getDoctypeGroupQuery.watch({}).valueChanges.pipe(map(({data}: any) => data.getDoctypeGroup));
  }

  public searchDocuments(entities: any[], typeDocument: any[]): Observable<Response> {
    return this.getDocumentsByEntityValuesQuery.watch({
      entities,
      doctypes: typeDocument
    }).valueChanges.pipe(map(({data}: any) => data.getDocumentsByEntityValues));
  }

  public getDoctypeGroupsByDoctypeName(doctype: string): Observable<Response> {
    return this.getDoctypeGroupsByDoctypeNameQuery
      .watch({
        doctype: doctype,
      })
      .valueChanges.pipe(map(({data}: any) => data.getDoctypeGroupsByDoctypeName));
  }

  public getDoctypeFormat(format: string): Observable<Response> {
    return this.getDoctypeFormatQuery.watch({format}).valueChanges.pipe(map(({data}: any) => data.getDoctypeFormat));
  }

  public getDoctypeGroupsProjectRole(): Observable<Response> {
    return this.getDoctypeGroupsProjectRoleQuery
      .watch({})
      .valueChanges.pipe(map(({data}: any) => data.getDoctypeGroupsProjectRole));
  }

  public searchDocumentByID(id: number): Observable<Response> {
    return this.getDocumentByIDQuery
      .watch({id: id}).valueChanges.pipe(map(({data}: any) => data.getDocumentByID));
  }
}

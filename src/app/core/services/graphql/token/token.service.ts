import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ExecuteProcessQuery,
  GetTokensByProcessUsersQuery,
  GetWorkProcessQuery,
  GetCommentByDocumentQuery,
  CreateCommentQuery,
  GetTxTokenByIDQuery,
  GetTxRuleByIDQuery,
  GetTxDocByIDQuery,
  GetTxTokenQuery,
  GetTxDocQuery,
  GetTxRuleQuery,
  GetTxTokenByDocumentIDQuery,
  GetTxDocByDocumentIDQuery,
  GetTxRuleByDocumentIDQuery, GetDoctypeByIDQuery,
} from './token.query.services';
import { map } from 'rxjs/operators';
import { Token, Response, ExecuteToken } from '@app/core/models';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(
    private executeProcessQuery: ExecuteProcessQuery,
    private getTokensByProcessUsersQuery: GetTokensByProcessUsersQuery,
    private getDoctypeByIDQuery: GetDoctypeByIDQuery,
    private getWorkProcessQuery: GetWorkProcessQuery,
    private getCommentByDocumentQuery: GetCommentByDocumentQuery,
    private createCommentQuery: CreateCommentQuery,
    private getTxTokenByIDQuery: GetTxTokenByIDQuery,
    private getTxRuleByIDQuery: GetTxRuleByIDQuery,
    private getTxDocByIDQuery: GetTxDocByIDQuery,
    private getTxTokenQuery: GetTxTokenQuery,
    private getTxDocQuery: GetTxDocQuery,
    private getTxRuleQuery: GetTxRuleQuery,
    private getTxTokenByDocumentIDQuery: GetTxTokenByDocumentIDQuery,
    private getTxDocByDocumentIDQuery: GetTxDocByDocumentIDQuery,
    private getTxRuleByDocumentIDQuery: GetTxRuleByDocumentIDQuery,
  ) {}

  public getTokensByProcessUsers(processId: string): Observable<Response> {
    return this.getTokensByProcessUsersQuery.watch({process_id: processId}).valueChanges.pipe(map(({ data }: any) => data.getTokensByProcessUsers));
  }

  public getDoctypeByID(id: string): Observable<Response> {
    return this.getDoctypeByIDQuery.watch({id: id}).valueChanges.pipe(map(({ data }: any) => data.getDoctypeByID));
  }

  public executeProcess(token: ExecuteToken): Observable<Response> {
    return this.executeProcessQuery.mutate({rq: { data: token }}).pipe(map(({ data }: any) => data.executeProcess));
  }

  public getWorkProcess(queue: string): Observable<Response> {
    return this.getWorkProcessQuery.mutate({queue: queue}).pipe(map(({ data }: any) => data.getWorkProcess));
  }

  getCommentByDocument(document: string): Observable<Response> {
    return this.getCommentByDocumentQuery
      .watch({
        document: document,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getCommentByDocument));
  }

  createComment(comment: any): Observable<Response> {
    return this.createCommentQuery
      .mutate({
        newcomment: comment,
      })
      .pipe(map(({ data }: any) => data.createComment));
  }

  getTxTokenByID(document: string): Observable<Response> {
    return this.getTxTokenByIDQuery
      .watch({
        id: document,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getTxTokenByID));
  }

  getTxToken(): Observable<Response> {
    return this.getTxTokenQuery
      .watch()
      .valueChanges.pipe(map(({ data }: any) => data.getTxToken));
  }

  getTxRuleByID(document: string): Observable<Response> {
    return this.getTxRuleByIDQuery
      .watch({
        id: document,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getTxRuleByID));
  }

  getTxRule(): Observable<Response> {
    return this.getTxRuleQuery
      .watch()
      .valueChanges.pipe(map(({ data }: any) => data.getTxRule));
  }

  getTxDocByID(document: string): Observable<Response> {
    return this.getTxDocByIDQuery
      .watch({
        id: document,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getTxDocByID));
  }

  getTxDoc(): Observable<Response> {
    return this.getTxDocQuery
      .watch()
      .valueChanges.pipe(map(({data}: any) => data.getTxDoc ));
  }

  getTxTokenByDocumentID(documentID: string): Observable<Response> {
    return this.getTxTokenByDocumentIDQuery
      .watch({
        id: documentID,
      })
      .valueChanges.pipe(map( ({data}: any) => data.getTxTokenByDocumentID ));
  }

  public getTxDocByDocumentID(documentID: string): Observable<Response> {
    return this.getTxDocByDocumentIDQuery.watch({id: documentID}).valueChanges.pipe(map(({data}: any) => data.getTxDocByDocumentID));
  }

  getTxRuleByDocumentID(documentID: string): Observable<Response> {
    return this.getTxRuleByDocumentIDQuery
      .watch({
        id: documentID
      })
      .valueChanges.pipe(map(({ data }: any) => data.getTxRuleByDocumentID));
  }
}

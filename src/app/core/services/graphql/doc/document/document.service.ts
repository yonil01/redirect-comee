import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {Response, Document, EntityValue} from '@app/core/models';
import {Observable} from 'rxjs';
import {
  CreateDocumentQuery,
  GetFirstFileByDocumentIDQuery,
  GetFileByDocumentIDAndPageIDQuery,
  GetValuesByDocumentIdQuery,
  UpdateEntityToDocumentquery,
  NewEntityToDocumentQuery,
  GetDocumentByIDQuery,
  DeleteEntityToDocumentQuery,
  GetTokenByDocumentID,
  AddPagesDocumentBlankMutation,
  UpdateDoctypeByDocumentMutation,
  UpdatePageByVersionMutation, DeleteDocumentMutation,
} from './document.query.service';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(
    private apollo: Apollo,
    private createDocumentQuery: CreateDocumentQuery,
    private addPagesDocumentBlankMutation: AddPagesDocumentBlankMutation,
    private getFirstFileByDocumentIDQuery: GetFirstFileByDocumentIDQuery,
    private getTokenByDocumentID: GetTokenByDocumentID,
    private getFileByDocumentIDAndPageIDQuery: GetFileByDocumentIDAndPageIDQuery,
    private getValuesByDocumentIdQuery: GetValuesByDocumentIdQuery,
    private updateEntityToDocumentQuery: UpdateEntityToDocumentquery,
    private newEntityToDocumentQuery: NewEntityToDocumentQuery,
    private getDocumentByIdQuery: GetDocumentByIDQuery,
    private deleteEntityToDocumentMutate: DeleteEntityToDocumentQuery,
    private updateDoctypeByDocumentMutation: UpdateDoctypeByDocumentMutation,
    private updatePageByVersionMutation: UpdatePageByVersionMutation,
    private deleteDocumentMutation: DeleteDocumentMutation,
  ) {
  }

  public getFirstFileByDocumentID(id: number): Observable<Response> {
    return this.getFirstFileByDocumentIDQuery.watch({id: id}).valueChanges.pipe(map(({data}: any) => data?.getFirstFileByDocumentID));
  }

  public getTokenByDocID(id: number): Observable<Response> {
    return this.getTokenByDocumentID.watch({id: id}).valueChanges.pipe(map(({data}: any) => data?.getTokenByDocumentID));
  }

  getFileByDocumentIDAndPageID(document_id: number, page_id: number[]): Observable<Response> {
    return this.getFileByDocumentIDAndPageIDQuery
      .watch({
        document_id: document_id,
        page_id: page_id,
      })
      .valueChanges.pipe(map(({data}: any) => data.getFileByDocumentIDAndPageID));
  }

  createDocument(document: Document): Observable<Response> {
    return this.createDocumentQuery
      .mutate({
        newDocument: document,
      })
      .pipe(map(({data}: any) => data.createDocument));
  }

  addPagesDocumentBlank(document_id_main: number, document_id: number, NumberPage: number[]): Observable<Response> {
    return this.addPagesDocumentBlankMutation
      .mutate({
        document_id_main: document_id_main,
        document_id: document_id,
        NumberPage: NumberPage,
      })
      .pipe(map(({data}: any) => data.addPagesDocumentBlank));
  }

  getValuesByDocumentID(DocumentID: string): Observable<Response> {
    return this.getValuesByDocumentIdQuery
      .watch({
        DocumentID: DocumentID,
      })
      .valueChanges.pipe(map(({data}: any) => data.getValuesByDocumentID));
  }

  public updateEntityToDocument(entityValue: EntityValue[], documentId: string): Observable<Response> {
    return this.updateEntityToDocumentQuery.mutate({
        requestUpdateEntitiesValues: {
          data: {
            entities: entityValue,
            document_id: documentId,
          },
        },
      })
      .pipe(map(({data}: any) => data.updateEntityToDocument));
  }

  updatePageByVersion(VersionId: number, VersionsAndNumberPages: { version_id: number, number_page: number }[]): Observable<Response> {
    return this.updatePageByVersionMutation
      .mutate({
        VersionId,
        VersionsAndNumbePages: VersionsAndNumberPages
      })
      .pipe(map(({data}: any) => data.updatePageByVersion));
  }

  public NewEntityToDocument(entityValue: EntityValue[], documentId: string): Observable<Response> {
    return this.newEntityToDocumentQuery.mutate({
        requestNewEntitiesValues: {
          data: {
            entities: entityValue,
            document_id: documentId,
          },
        },
      })
      .pipe(map(({data}: any) => data.NewEntityToDocument));
  }

  deleteEntityToDocument(entities: any[], documentId: string): Observable<Response> {
    return this.deleteEntityToDocumentMutate
      .mutate({
        request: {
          data: {
            entities: entities,
            document_id: documentId,
          },
        },
      })
      .pipe(map(({data}: any) => data.deleteEntityToDocument));
  }

  public getDocumentById(id: string): Observable<Response> {
    return this.getDocumentByIdQuery.watch({id: id}).valueChanges.pipe(map(({data}: any) => data.getDocumentByID));
  }

  updateDoctypeByDocument(document_id: number, doctype_id: string): Observable<Response> {
    return this.updateDoctypeByDocumentMutation
      .mutate({
        document_id: document_id,
        doctype_id: doctype_id,
      })
      .pipe(map(({data}: any) => data.updateDoctypeByDocument));
  }

  deleteDocument(id: number): Observable<Response> {
    return this.deleteDocumentMutation
      .mutate({
        id: id,
      })
      .pipe(map(({data}: any) => data.deleteDocument));
  }
}

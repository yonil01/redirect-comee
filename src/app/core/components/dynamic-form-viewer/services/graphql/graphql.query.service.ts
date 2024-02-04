import { Injectable } from '@angular/core';
import { Mutation, Query } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class GetFirstFileByDocumentIDQuery extends Query<Response> {
  document = gql`
    query getFirstFileByDocumentID($id: Int64!) {
      getFirstFileByDocumentID(DocumentID: $id) {
        error
        data {
          file_encode
          ext
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
export class GetDocumentByIDQuery extends Query<Response> {
  document = gql`
    query getDocumentByID($id: Int64!) {
      getDocumentByID(id: $id) {
        error
        data {
          id
          auto_name
          doctype {
            id
          }
          entities {
            entity {
              id
            }
            attributes_id
            attributes_value {
              name
              value
            }
          }
          created_at
          updated_at
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
export class GetDatasetsValuesQuery extends Query<Response> {
  document = gql`
    query getDatasetsValues($id: String!) {
      getDatasetsValues(dataset_id: $id) {
        error
        data {
          id
          code
          sequence
          value
          description
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
export class GetCascadingDatasetValueByIdAttributeQuery extends Query<Response> {
  document = gql`
    query getCascadingDatasetValueByIdAttribute(
      $cascading_dataset_id: ID!
      $attribute_id: ID!
      $attribute_id_value: ID
      $value: String
    ) {
      getCascadingDatasetValueByIdAttribute(
        cascading_dataset_id: $cascading_dataset_id
        attribute_id: $attribute_id
        attribute_id_value: $attribute_id_value
        value: $value
      ) {
        error
        code
        data {
          cascading_dataset_id
          cascading_dataset_response
        }
        type
        msg
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class GetAutofillByValueQuery extends Query<Response> {
  document = gql`
    query getAutofillByValue($autofill_id: String!, $entity_id: String!, $data: Any!) {
      getAutofillByValue(autofill_id: $autofill_id, entity_id: $entity_id, data: $data) {
        error
        data {
          autofill_id
          autofill_response
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
export class UpdateEntityToDocumentquery extends Mutation {
  document = gql`
    mutation updateEntityToDocument($requestUpdateEntitiesValues: RequestUpdateEntitiesValues!) {
      updateEntityToDocument(input: $requestUpdateEntitiesValues) {
        error
        data {
          id
          entities {
            entity {
              id
            }
            attributes_id
            attributes_value {
              name
              value
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
export class NewEntityToDocumentQuery extends Mutation {
  document = gql`
    mutation NewEntityToDocument($requestNewEntitiesValues: RequestNewEntitiesValues!) {
      NewEntityToDocument(input: $requestNewEntitiesValues) {
        error
        data {
          id
          entities {
            entity {
              id
            }
            attributes_id
            attributes_value {
              name
              value
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
export class DeleteEntityToDocumentQuery extends Mutation {
  document = gql`
    mutation deleteEntityToDocument($request: RequestDeleteEntitiesValues!) {
      deleteEntityToDocument(input: $request) {
        error
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
export class CreateDocumentQuery extends Mutation {
  document = gql`
    mutation createDocument($newDocument: RequestNewDocument!) {
      createDocument(input: $newDocument) {
        error
        data {
          id
          entities {
            entity {
              id
            }
            attributes_id
            attributes_value {
              name
              value
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

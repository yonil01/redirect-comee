import {Injectable} from '@angular/core';
import {Mutation, Query} from 'apollo-angular';
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
          document {
            entities {
              entity {
                name
                id
              }
              attributes_value {
                name
                value
              }
            }
            data_captured {
              id
              document_id
              attribute_id
              value
              number_capture
              left_position
              top_position
              right_position
              bottom_position
              status
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
export class GetFileByDocumentIDAndPageIDQuery extends Query<Response> {
  document = gql`
    query getFileByDocumentIDAndPageID($document_id: Int64!, $page_id: [Int64!]){
      getFileByDocumentIDAndPageID(DocumentID: $document_id, PageID: $page_id) {
        error
        msg
        code
        data {
          document_id
          path_files {
            page {
              id
              path
              file_name
            }
            ext
            full_path
            number_pages
            file_encode
          }
        }
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class CreateDocumentQuery extends Mutation {
  document = gql`
    mutation createDocument($newDocument: NewDocument!) {
      createDocument(input: { data: $newDocument }) {
        error
        data {
          id
          versions {
            id
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
export class AddPagesDocumentBlankMutation extends Mutation {
  document = gql`
    mutation addPagesDocumentBlank($document_id_main: Int64!, $document_id: Int64!, $NumberPage: [Int!]) {
      addPagesDocumentBlank(document_id_main: $document_id_main, document_id:$document_id, NumberPage: $NumberPage) {
        error
        data {
          id
          file_name
          number_pages
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
export class GetValuesByDocumentIdQuery extends Query<Response> {
  document = gql`
    query getValuesByDocumentID($DocumentID: String!) {
      getValuesByDocumentID(DocumentID: $DocumentID) {
        error
        data {
          id
          entity
          attributes {
            name
            value
            is_cipher
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
export class UpdateDoctypeByDocumentMutation extends Mutation {
  document = gql`
    mutation updateDoctypeByDocument($document_id: Int64!, $doctype_id: ID!) {
      updateDoctypeByDocument(document_id: $document_id, doctype_id: $doctype_id) {
        error
        msg
        code
        data {
          id
          auto_name
          doctype {
            id
            name
          }
          batch
        }
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class UpdatePageByVersionMutation extends Mutation {
  document = gql`
    mutation updatePageByVersion($VersionId: Int64!, $VersionsAndNumbePages: [VersionAndNumberPage!]) {
      updatePageByVersion(version_id: $VersionId, versions_and_number_pages: $VersionsAndNumbePages) {
        error
        data {
          id
          file_name
          number_pages
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
export class DeleteDocumentMutation extends Mutation {
  document = gql`
    mutation deleteDocument($id: Int64!) {
      deleteDocument(id: $id) {
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
export class GetDocumentByIDQuery extends Query<Response> {
  document = gql`
    query getDocumentByID($id: Int64!) {
      getDocumentByID(id: $id) {
        error
        data {
          id
          auto_name
          user_creation {
            id
            username
            name
            last_name
          }
          doctype {
            id
            name
            autoname
            url_path
            format
            procedure
            class
            doctypes_entities {
              id
              entities {
                id
                name
                is_unique
                attributes {
                  id
                  name
                  description
                  tag_html
                  type
                  mask
                  min_length
                  max_length
                  validation
                  field_types
                  dataset
                  required
                  hidden
                  disabled
                  entities_id
                  is_index
                  sequence
                  entities_attributes_dataset {
                    id
                    description
                    name
                  }
                  entities_attributes_autofills {
                    id
                    autofills {
                      id
                      name
                      description
                      outside
                      process
                    }
                    sequence
                    is_search
                  }
                  entities_attributes_cascading_dataset {
                    id
                    cascading_dataset {
                      id
                      name
                    }
                    sequence
                  }
                  min_length
                  max_length
                  validation
                  field_types
                  is_cipher
                  required
                  hidden
                  disabled
                }
              }
            }
            required {
            id
            name
            version
            is_active
            required_doctypes {
              id
              is_required
              doctype_related_id
              required_attributes {
                id
                entity_id
                attribute_id
                value
              }
            }
            required_attributes_common {
              id
              required_id
              attribute_id
            }
          }
          }
          entities {
            attributes_id
            entity {
              id
              name
              is_unique
            }
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
export class GetTokenByDocumentID extends Query<Response> {
  document = gql`
    query getTokenByDocumentID($id: Int64!) {
      getTokenByDocumentID(document_id: $id) {
        error
        code
        data {
         id
          queue{
            id
            name
          }
          user {
            username
          }
          users_balance {
            username
          }
          created_at
          updated_at
        }
        type
        msg
      }
    }
  `;
}

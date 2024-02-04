import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Mutation, Query } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GetTokensByProcessUsersQuery extends Query<Response> {
  document = gql`
    query getTokensByProcessUsers($process_id: ID!) {
      getTokensByProcessUsers(process_id: $process_id) {
        error
        data {
          id
          document {
            id
            auto_name
            batch
            status
            user_creation {
              id
              name
              last_name
            }
            versions {
              id
              version
              pages {
                id
                path
                file_name
                hash
                number_pages
                original_file
                file_size
              }
            }
            locked
            format
          }
          doctype {
            id
            name
            autoname
            url_path
            format
            procedure
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
          autoname
          queue {
            id
            name
            sequences
            type
            balance_type
            class
            ans
            percent_alert
            status
            id_bpmn_element
            must_confirm_comment
            description
            comments {
              id
              comment
            }
            queue_attributes {
              id
              attribute {
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
                is_cipher
                required
                hidden
                disabled
                entities_id
                is_index
                sequence
              }
            }
            executions {
              id
              name
              type
              class
              description
              execution_roles {
                id
                role {
                  id
                  name
                }
              }
              rules {
                id
                code
                name
                first
                child_true
                child_false
                action
                itemtype_id
                description
                rule_params {
                  id
                  name
                  value
                }
              }
            }
            queue_roles {
              id
              role {
                id
              }
            }
          }
          created_at
        }
        code
        type
        msg
      }
    }
  `;
}

/////

@Injectable({
  providedIn: 'root',
})
export class GetDoctypeByIDQuery extends Query<Response> {
  document = gql`
    query getDoctypeByID($id: String!) {
      getDoctypeByID(id: $id) {
        error
        data {
          id
          required {
             id
             name
             version
             is_active
          }
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
        }
        code
        type
        msg
      }
    }
  `;
}

////

@Injectable({
  providedIn: 'root',
})
export class ExecuteProcessQuery extends Mutation {
  document = gql`
    mutation executeProcess($rq: RequestExecuteToken!) {
      executeProcess(input: $rq) {
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

@Injectable({
  providedIn: 'root',
})
export class GetWorkProcessQuery extends Mutation {
  document = gql`
    mutation getWorkProcess($queue: ID!) {
      getWorkProcess(queue: $queue) {
        error
        code
        data {
          id
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
export class GetCommentByDocumentQuery extends Query<Response> {
  document = gql`
    query getCommentByDocument($document: Int64!) {
      getCommentByDocument(document: $document) {
        error
        data {
          id
          document {
            id
          }
          token {
            id
          }
          queue {
            id
            name
            sequences
            type
          }
          user {
            id
            name
          }
          process {
            id
            name
          }
          value
          created_at
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
export class CreateCommentQuery extends Mutation {
  document = gql`
    mutation createComment($newcomment: NewComment!) {
      createComment(input: { data: $newcomment }) {
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

@Injectable({
  providedIn: 'root',
})
export class GetTxTokenQuery extends Query<Response> {
  document = gql`
    query getTxToken {
      getTxToken {
        error
        data {
          id
          id_execution
          token {
            id
          }
          document {
            id
          }
          user {
            id
            username
          }
          event
          description
          doc_type {
            id
            name
          }
          process {
            id
            name
          }
          queue {
            id
            name
          }
          execution {
            id
            name
          }
          execution_type
          new_queue {
            id
            name
          }
          project {
            id
            name
          }
          begin_at
          end_at
          created_at
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
export class GetTxTokenByDocumentIDQuery extends Query<Response> {
  document = gql`
    query getTxTokenByDocumentID($id: Int64!) {
      getTxTokenByDocumentID(id: $id) {
        error
        data {
          id
          id_execution
          document {
            id
          }
          user {
            id
            username
          }
          event
          description
          doc_type {
            id
            name
          }
          process {
            id
            name
          }
          queue {
            id
            name
          }
          execution {
            id
            name
          }
          execution_type

          project {
            id
            name
          }
          begin_at
          end_at
          created_at
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
export class GetTxTokenByIDQuery extends Query<Response> {
  document = gql`
    query getTxTokenByID($id: Int64!) {
      getTxTokenByID(id: $id) {
        error
        data {
          id
          id_execution
          token {
            id
          }
          document {
            id
          }
          user {
            id
          }
          event
          description
          doc_type {
            id
          }
          process {
            id
            name
          }
          queue {
            id
          }
          execution {
            id
            name
          }
          execution_type
          new_queue {
            id
            name
          }
          project {
            id
            name
          }
          begin_at
          end_at
          created_at
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
export class GetTxRuleQuery extends Query<Response> {
  document = gql`
    query getTxRule {
      getTxRule {
        error
        data {
          id
          id_execution
          token {
            id
          }
          document {
            id
          }
          event
          description
          user {
            id
          }
          doc_type {
            id
          }
          process {
            id
            name
          }
          queue {
            id
          }
          execution {
            id
          }
          activity_type
          rule {
            id
          }
          activity {
            id
          }
          route
          response
          begin_at
          end_at
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
export class GetTxRuleByDocumentIDQuery extends Query<Response> {
  document = gql`
    query getTxRuleByDocumentID($id: Int64!) {
      getTxRuleByDocumentID(id: $id) {
        error
        data {
          id
          id_execution
          token {
            autoname
          }
          event
          description
          user {
            id
            username
          }
          doc_type {
            id
            name
          }
          process {
            id
            name
          }
          queue {
            id
            name
          }
          execution {
            id
            name
          }
          activity_type
          rule {
            id
            name
          }
          activity {
            id
            name
          }
          route
          response
          begin_at
          end_at
          created_at
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
export class GetTxRuleByIDQuery extends Query<Response> {
  document = gql`
    query getTxRuleByID($id: ID!) {
      getTxRuleByID(id: $id) {
        error
        data {
          id
          id_execution
          token {
            id
          }
          document {
            id
          }
          event
          description
          user {
            id
          }
          doc_type {
            id
          }
          process {
            id
            name
          }
          queue {
            id
          }
          execution {
            id
          }
          activity_type
          rule {
            id
          }
          activity {
            id
          }
          route
          response
          begin_at
          end_at
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
export class GetTxDocQuery extends Query<Response> {
  document = gql`
    query getTxDoc {
      getTxDoc {
        error
        data {
          id
          document {
            id
            auto_name
          }
          event
          description
          doc_type {
            id
            name
          }
          entity {
            id
            name
          }
          value
          user {
            id
            username
          }
          project {
            id
            name
          }
          attribute {
            name
          }
          created_at
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
export class GetTxDocByDocumentIDQuery extends Query<Response> {
  document = gql`
    query getTxDocByDocumentID($id: Int64!) {
      getTxDocByDocumentID(id: $id) {
        error
        data {
          id
          document {
            id
            auto_name
          }
          event
          description
          doc_type {
            id
            name
            format
          }
          entity {
            id
            name
          }
          attribute {
            id
            name
          }
          value
          user {
            id
            username
          }
          project {
            id
            name
          }
          created_at
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
export class GetTxDocByIDQuery extends Query<Response> {
  document = gql`
    query getTxDocByID($id: ID!) {
      getTxDocByID(id: $id) {
        error
        data {
          id
          document {
            id
            auto_name
          }
          event
          description
          doc_type {
            id
            name
            format
          }
          entity {
            id
            name
            is_unique
            attributes {
              id
              name
              description
              tag_html
            }
          }
          value
          user {
            id
            username
          }
          created_at
        }
        code
        type
        msg
      }
    }
  `;
}

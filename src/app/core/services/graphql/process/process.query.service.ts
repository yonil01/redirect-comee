import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Mutation, Query} from 'apollo-angular';
import {Response} from '@app/core/models';

@Injectable({
  providedIn: 'root',
})
export class GetProcessQuery extends Query<Response> {
  document = gql`
    query getProcess {
      getProcess {
        error
        data {
          id
          name
          description
          class
          ans
          project {
            id
          }
          process_root
          percent_alert
          process_doctypes {
            id
            doctype {
              id
              name
            }
          }
          process_roles {
            id
            role {
              id
              name
            }
          }
          queues {
            id
            name
            sequences
            type
            balance_type
            class
            ans
            percent_alert
            must_confirm_comment
            comments{
              id
              comment
            }
            executions {
              id
              name
              type
              timer {
                id
                name
                type
                frequency
                day_of_week
                day_of_month
                begin_at
                end_at
                enabled
                is_not_running
                last_execution
              }
              execution_roles {
                id
                role {
                  id
                  name
                }
              }
              class
              description
            }
            queue_roles {
              id
              role {
                id
                name
              }
            }
            queue_attributes {
              id
              attribute {
                id
                name
              }
            }
          }
          type_process
          status
          document_id_bpmn
          document_id_svg
          document_id_ans
          version
          is_locked
          locked_info
          is_published
          tokens {
            id
            queue {
              id
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
export class GetProcessByIDQuery extends Query<Response> {
  document = gql`
   query getProcessByID($id: String!) {
      getProcessByID(id: $id) {
        error
        data {
          id
          name
          description
          class
          ans
          process_root
          percent_alert
          type_process
          status
          project {
            id
          }
          document_id_bpmn
          document_id_svg
          document_id_ans
          version
          is_locked
          locked_info
          is_published
          tokens {
            id
            queue {
              id
            }
          }
          process_doctypes {
            id
            doctype {
              id
              name
            }
          }
          process_roles {
            id
            role {
              id
              name
            }
          }
          queues {
            id
            name
            sequences
            balance_type
            class
            ans
            percent_alert
            status
            id_bpmn_element
            must_confirm_comment
            id_activity_rebalancing
            id_execution_activity
            is_execution_activity
            description
            comments {
              id
              comment
            }
            queue_capture {
              id
              capture_type {
                Id
                name
              }
              attribute_capture {
                id
                attribute_id {
                  id
                  name
                  description
                  entities_id
                }
                capture_type
                retype
              }
            }
            params_capture {
              id
              dictionary {
                id
                name
                value
              }
              value
              created_at
              updated_at
            }
            queue_doctype {
              id
              doctype_id {
                id
                name
                doctypes_entities {
                  entities {
                    id
                    name
                    attributes {
                      id
                      name
                      entities_id
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
                      is_index
                      sequence
                      entities_attributes_autofills {
                        id
                      }
                      entities_attributes_cascading_dataset {
                        id
                      }
                      entities_attributes_dataset {
                        id
                      }
                      regex
                    }
                  }
                }
              }
            }
            queue_attributes {
              id
              attribute {
                id
                name
              }
            }
            queue_roles {
              id
              role {
                id
                name
              }
            }
            executions {
              id
              name
              type
              class
              description
              must_confirm_comment
              comment_attribute_id
              comment_dataset_id
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
              comments{
                id
                comment
              }
              execution_roles {
                id
                role {
                  id
                  name
                }
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


@Injectable({
  providedIn: 'root',
})
export class GetTokensByQueueIdQuery extends Query<Response> {
  document = gql`
   query getTokensByQueue($queue_id: ID!) {
      getTokensByQueue(queue_id: $queue_id) {
        error
        data {
          id
          user {
            id
            username
            name
            last_name
          }
          document {
            id
          }
          doctype {
            id
          }
          autoname
          queue {
            id
            name
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
export class DeleteTokensUserByTokenIdQuery extends Mutation {
  document = gql`
   mutation deleteTokenUsersByTokenId($token_id: Int64!) {
      deleteTokenUsersByTokenId(token_id: $token_id) {
        error
        data {
          id
          token {
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
export class AssignWorkQuery extends Mutation {
  document = gql`
   mutation balanceToken($token: Int64!, $user: ID!) {
      balanceToken(token: $token, user: $user) {
        error
        data {
          id
          user {
            id
          }
          document {
            id
          }
          doctype {
            id
          }
          queue {
            id
            name
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
export class GetTokenUsersQuery extends Query<Response> {
  document = gql`
   query getTokenUserByQueueId($queue_id: ID!) {
      getTokenUserByQueueId(queue_id: $queue_id) {
        error
        data {
          id
          token {
            id
            user {
              id
              username
              name
              last_name
            }
            document {
              id
            }
            autoname
            created_at
            updated_at
          }
          user {
              id
              username
              name
              last_name
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
export class GetUsersByQueueIdQuery extends Query<Response> {
  document = gql`
   query getUserRolesByQueueId($queue_id: ID!) {
      getUserRolesByQueueId(queue_id: $queue_id) {
        error
        data {
          id
          username
          name
          last_name
          email_notifications
          identification_number
          identification_number
        }
        code
        type
        msg
      }
   }
  `;
}


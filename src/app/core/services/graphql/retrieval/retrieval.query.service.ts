import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Mutation, Query } from 'apollo-angular';
@Injectable({
  providedIn: 'root',
})
export class GetDoctypeGroupsByDoctypeNameQuery extends Query<Response> {
  document = gql`
    query getDoctypeGroupsByDoctypeName($doctype: String!) {
      getDoctypeGroupsByDoctypeName(doctype: $doctype) {
        error
        data {
          id
          project
          doc_types {
            name
            format
            url_path
            procedure
            entities {
              id
              is_unique
              attributes {
                id
                description
                tag_html
                type
                mask
                data_sets {
                  value
                  description
                  sequence
                }
                autofill
                min_length
                max_length
                validation
                cascading_datasets
                is_cipher
                required
                hidden
                disabled
              }
              project
              is_unique
            }
          }
        }
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class GetDoctypeFormatQuery extends Query<Response> {
  document = gql`
    query getDoctypeFormat($format: String!) {
      getDoctypeFormat(format: $format) {
        error
        data {
          id
          code
          name
          url_path
          storage_id
          format
          autoname
          procedure
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
          tipo_soporte
          retencion_electronic
          retencion_ag
          retencion_ac
          class
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
export class GetDoctypeDashBoardsQuery extends Query<Response> {
  document = gql`
    query getDoctypeDashBoards {
      getDoctypeDashBoards {
        error
        data {
          id
          project
          doc_types {
            code
            name
            url_path
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
export class GetDoctypeReportsQuery extends Query<Response> {
  document = gql`
    query getDoctypeReports {
      getDoctypeReports {
        error
        type
        data {
          id
          project
          doc_types {
            code
            name
            url_path
            storage
            format
            type_support
            is_cipher
            procedure
            entities {
              id
              is_unique
              attributes {
                id
                description
                tag_html
                type
                mask
                data_sets {
                  value
                  description
                  sequence
                }
                autofill
                min_length
                max_length
                validation
                field_types
                cascading_datasets
                is_cipher
                required
                hidden
                disabled
              }
            }
          }
        }
        msg
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class GetDoctypeGroupsProjectRoleQuery extends Query<Response> {
  document = gql`
    query getDoctypeGroupsProjectRole {
      getDoctypeGroupsProjectRole {
        error
        data {
          id
          name
          doctypes {
            id
            code
            name
            url_path
            storage_id
            format
            autoname
            class
            is_cipher
            doctypes_entities {
              id
              sequence
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
                  required
                  entities_attributes_dataset {
                    id
                    name
                    description
                    field_type
                  }
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
export class GetDocumentsByEntityValuesQuery extends Query<Response> {
  document = gql`
    query getDocumentsByEntityValues($entities: [NewEntityValue]!, $doctypes: [ID]) {
      getDocumentsByEntityValues(input: {doctypes: $doctypes, entities: $entities}) {
        error
        data {
          id
          auto_name
          batch
          status
          format
          locked
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
          versions {
              id
              version
              pages {
                id
                number_pages
                version {
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

@Injectable({
  providedIn: 'root',
})
export class SearchDocumentByIDQuery extends Query<Response> {
  document = gql`
    query getDocumentByID($id: Int64!) {
      getDocumentByID(id: $id) {
        error
        data {
          id
          auto_name
          batch
          status
          format
          locked
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
          versions {
              id
              version
              pages {
                id
                number_pages
                version {
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

@Injectable({
  providedIn: 'root',
})
export class PublishDoctypeQuery extends Mutation {
  document = gql`
    mutation publishDoctype($doctype_id: String!, $procedure: String!) {
      publishDoctype(doctype_id: $doctype_id, procedure: $procedure) {
        error
        data {
          id
        }
        type
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
export class GetDoctypeGroupQuery extends Query<Response> {
  document = gql`
    query getDoctypeGroup {
      getDoctypeGroup {
        error
        data {
          id
          name
          doctypes {
            id
            code
            name
            url_path
            storage_id
            format
            autoname
            tipo_soporte
            retencion_electronic
            retencion_ag
            retencion_ac
            retencion_ah
            final_disposition
            digitalizacion
            procedure
            class
            is_cipher
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
                  type
                  tag_html
                  validation
                  required
                  mask
                  entities_attributes_dataset {
                    id
                    description
                    name
                    field_type
                    max_length
                    outside
                    process
                  }
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

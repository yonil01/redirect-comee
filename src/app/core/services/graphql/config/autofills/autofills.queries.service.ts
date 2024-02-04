import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Mutation, Query } from 'apollo-angular';
import { Response } from '@app/core/models';

@Injectable({
  providedIn: 'root',
})
export class GetAutofillsQuery extends Query<Response> {
  document = gql`
    query getAutofills {
      getAutofills {
        error
        data {
          id
          name
          description
          outside
          process
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
export class GetAutofillsByEntityIDQuery extends Query<Response> {
  document = gql`
    query getAutofillsByEntityID($id: String!) {
      getAutofillsByEntityID(entity_id: $id) {
        error
        data {
          id
          name
          description
          outside
          process
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
export class CreateAutofillsQuery extends Mutation {
  document = gql`
    mutation createAutofills($request: RequestNewAutofills!) {
      createAutofills(input: $request) {
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
export class UpdateAutofillsQuery extends Mutation {
  document = gql`
    mutation updateAutofills($request: RequesUpdateAutofills!) {
      updateAutofills(input: $request) {
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
export class DeleteAutofillsQuery extends Mutation {
  document = gql`
    mutation deleteAutofills($id: String!) {
      deleteAutofills(id: $id) {
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
export class CreateAttributeAutofillQuery extends Mutation {
  document = gql`
    mutation createAttributeAutofill($request: RequestNewAttributeAutofill!) {
      createAttributeAutofill(input: $request) {
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
export class GetAllAutofillValuesQuery extends Query<Response> {
  document = gql`
    query getAllAutofillValues($id: String!) {
      getAllAutofillValues(autofill_id: $id) {
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
export class GetAttributeAutofillsByAutofillIDQuery extends Query<Response> {
  document = gql`
    query getAttributeAutofillsByAutofillID($id: String!) {
      getAttributeAutofillsByAutofillID(autofill_id: $id) {
        error
        data {
          id
          autofills {
            id
            name
          }
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
            entities_attributes_dataset {
              id
              name
            }
          }
          sequence
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
export class DeleteAttributeAutofillQuery extends Mutation {
  document = gql`
    mutation deleteAttributeAutofill($id: String!) {
      deleteAttributeAutofill(id: $id) {
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
export class CreateAutofillValueQuery extends Mutation {
  document = gql`
    mutation createAutofillValue($request: RequestNewAutofillsValues!) {
      createAutofillValue(input: $request) {
        error
        data {
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
export class UpdateAutofillValueQuery extends Mutation {
  document = gql`
    mutation updateAutofillValue($request: RequesUpdateAutofillsValues!) {
      updateAutofillValue(input: $request) {
        error
        data {
          autofill_id
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
export class DeleteAutofillValueQuery extends Mutation {
  document = gql`
    mutation deleteAutofillValue($id: Int!, $autofill_ad: String!) {
      deleteAutofillValue(id: $id, autofill_id: $autofill_ad) {
        error
        data {
          autofill_id
        }
        code
        type
        msg
      }
    }
  `;
}

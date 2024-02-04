import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Mutation, Query } from 'apollo-angular';
import { Response } from '@app/core/models';

@Injectable({
  providedIn: 'root',
})
export class GetDatasetsQuery extends Query<Response> {
  document = gql`
    query getDatasets {
      getDatasets {
        error
        data {
          id
          name
          description
          field_type
          max_length
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
export class CreateDatasetQuery extends Mutation {
  document = gql`
    mutation createDataset($request: RequestNewDataset!) {
      createDataset(input: $request) {
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
export class UpdateDatasetQuery extends Mutation {
  document = gql`
    mutation updateDataset($request: RequesUpdateDataset!) {
      updateDataset(input: $request) {
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
export class DeleteDatasetQuery extends Mutation {
  document = gql`
    mutation deleteDataset($id: String!) {
      deleteDataset(id: $id) {
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
export class CreateDatasetValueQuery extends Mutation {
  document = gql`
    mutation createDatasetValue($request: RequestNewDatasetValue!) {
      createDatasetValue(input: $request) {
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
export class CreateDatasetsValuesQuery extends Mutation {
  document = gql`
    mutation createDatasetsValues($request: RequestNewDatasetsValues!) {
      createDatasetsValues(input: $request) {
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
export class UpdateDatasetValueQuery extends Mutation {
  document = gql`
    mutation updateDatasetValue($request: RequesUpdateDatasetValue!) {
      updateDatasetValue(input: $request) {
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
export class DeleteDatasetValueByDatasetIDQuery extends Mutation {
  document = gql`
    mutation deleteDatasetValueByDatasetID($id: String!) {
      deleteDatasetValueByDatasetID(dataset_id: $id) {
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
export class DeleteDatasetValueQuery extends Mutation {
  document = gql`
    mutation deleteDatasetValue($id: Int!, $dataset_id: String!) {
      deleteDatasetValue(id: $id, dataset_id: $dataset_id) {
        error
        code
        type
        msg
      }
    }
  `;
}

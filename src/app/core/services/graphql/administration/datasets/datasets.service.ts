import {Injectable} from '@angular/core';
import {
  GetDatasetsQuery,
  CreateDatasetQuery,
  UpdateDatasetQuery,
  DeleteDatasetQuery,
  CreateDatasetsValuesQuery,
  GetDatasetsValuesQuery,
  CreateDatasetValueQuery,
  UpdateDatasetValueQuery,
  DeleteDatasetValueByDatasetIDQuery,
  DeleteDatasetValueQuery,
} from './datasets.queries.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Dataset, Response, DatasetValue} from '@app/core/models';

@Injectable({
  providedIn: 'root',
})
export class DatasetsService {
  constructor(
    private getDatasetsQuery: GetDatasetsQuery,
    private createDatasetQuery: CreateDatasetQuery,
    private updateDatasetQuery: UpdateDatasetQuery,
    private deleteDatasetQuery: DeleteDatasetQuery,
    private createDatasetValueQuery: CreateDatasetValueQuery,
    private createDatasetsValuesQuery: CreateDatasetsValuesQuery,
    private getDatasetsValuesQuery: GetDatasetsValuesQuery,
    private updateDatasetValueQuery: UpdateDatasetValueQuery,
    private deleteDatasetValueByDatasetIDQuery: DeleteDatasetValueByDatasetIDQuery,
    private deleteDatasetValueQuery: DeleteDatasetValueQuery,
  ) {
  }

  getDatasets(): Observable<Response> {
    return this.getDatasetsQuery.watch({}).valueChanges.pipe(map(({data}: any) => data.getDatasets));
  }

  createDataset(dataset: Dataset): Observable<Response> {
    return this.createDatasetQuery
      .mutate({
        request: {data: dataset},
      })
      .pipe(map(({data}: any) => data.createDataset));
  }

  updateDataset(dataset: Dataset): Observable<Response> {
    return this.updateDatasetQuery
      .mutate({
        request: {data: dataset},
      })
      .pipe(map(({data}: any) => data.updateDataset));
  }

  deleteDataset(id: string): Observable<Response> {
    return this.deleteDatasetQuery
      .mutate({
        id: id,
      })
      .pipe(map(({data}: any) => data.deleteDataset));
  }

  createDatasetValue(datasetValue: DatasetValue): Observable<Response> {
    return this.createDatasetValueQuery
      .mutate({
        request: {data: datasetValue},
      })
      .pipe(map(({data}: any) => data.createDatasetValue));
  }

  createDatasetsValues(datasetsValues: DatasetValue[]): Observable<Response> {
    return this.createDatasetsValuesQuery
      .mutate({
        request: {data: datasetsValues},
      })
      .pipe(map(({data}: any) => data.createDatasetsValues));
  }

  public getDatasetsValues(id: string): Observable<Response> {
    return this.getDatasetsValuesQuery.watch({id: id}).valueChanges.pipe(map(({data}: any) => data.getDatasetsValues));
  }

  updateDatasetValue(datasetValue: DatasetValue): Observable<Response> {
    return this.updateDatasetValueQuery
      .mutate({
        request: {data: datasetValue},
      })
      .pipe(map(({data}: any) => data.updateDatasetValue));
  }

  deleteDatasetValueByDatasetID(id: string): Observable<Response> {
    return this.deleteDatasetValueByDatasetIDQuery
      .mutate({
        id: id,
      })
      .pipe(map(({data}: any) => data.deleteDatasetValueByDatasetID));
  }

  deleteDatasetValue(id: number, dataset_id: string): Observable<Response> {
    return this.deleteDatasetValueQuery
      .mutate({
        id: id,
        dataset_id: dataset_id,
      })
      .pipe(map(({data}: any) => data.deleteDatasetValue));
  }
}

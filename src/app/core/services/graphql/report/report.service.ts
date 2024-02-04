import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetInfoProcedureQuery, GetInfoReportQuery } from './report.query.service';
import { map } from 'rxjs/operators';
import {Response} from "@app/core/models";

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(
    private getInfoProcedureQuery: GetInfoProcedureQuery,
    private getInfoReportQuery: GetInfoReportQuery,
  ) {}

  getInfoProcedure(procedure: string, parameters: any): Observable<Response> {
    return this.getInfoProcedureQuery
      .watch({
        procedure: procedure,
        parameters: parameters,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getInfoProcedure));
  }

  public getInfoReport(procedure: string, parameters: any): Observable<Response> {
    return this.getInfoReportQuery
      .watch({
        procedure: procedure,
        parameters: parameters,
      })
      .valueChanges.pipe(map(({ data }: any) => data.getInfoReport));
  }
}

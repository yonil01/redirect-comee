import {Injectable} from '@angular/core';
import {GetModulesQuery, GetModulesByRoleQuery} from './modules.query.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Response} from '@app/core/models';

@Injectable({
  providedIn: 'root',
})
export class ModulesService {
  constructor(private getModulesQuery: GetModulesQuery, private getModulesByRoleQuery: GetModulesByRoleQuery) {
  }

  getModules(): Observable<Response> {
    return this.getModulesQuery.watch({}).valueChanges.pipe(map(({data}: any) => data.getModules));
  }

  getModulesByRole(ids: string[], type: number): Observable<Response> {
    return this.getModulesByRoleQuery
      .watch({
        ids: ids,
        type: type,
      })
      .valueChanges.pipe(map(({data}: any) => data.getModulesByRole));
  }
}

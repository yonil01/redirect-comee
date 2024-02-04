import {Injectable} from '@angular/core';
import {LogoutQuery} from '@app/core/services/graphql/auth/logout/logout.query.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Response} from '@app/core/models';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private logoutQuery: LogoutQuery) {
  }

  logout(): Observable<Response> {
    return this.logoutQuery.mutate({}).pipe(map(({data}: any) => data.logout));
  }
}

import {Injectable} from '@angular/core';
import {first, map} from 'rxjs/operators';
import {
  Response,
} from '@app/core/models';
import {Observable} from 'rxjs';
import {
  AssignWorkQuery,
  DeleteTokensUserByTokenIdQuery,
  GetProcessByIDQuery,
  GetProcessQuery,
  GetTokensByQueueIdQuery, GetTokenUsersQuery, GetUsersByQueueIdQuery
} from "@app/core/services/graphql/process/process.query.service";
import {TokenModel, TokenUser, UserCreationModel} from "@app/core/models/workflow/workflow";

@Injectable({
  providedIn: 'root',
})
export class ProcessService {

  constructor(
    private getProcessQuery: GetProcessQuery,
    private getProcessByIDQuery: GetProcessByIDQuery,
    private getTokensByQueueIdQuery: GetTokensByQueueIdQuery,
    private deleteTokensUserByTokenIdQuery: DeleteTokensUserByTokenIdQuery,
    private getTokenUsersQuery: GetTokenUsersQuery,
    private getUsersByQueueIdQuery: GetUsersByQueueIdQuery,
    private assignWorkQuery: AssignWorkQuery,
  ) {
  }

  public getProcess(): Observable<Response> {
    return this.getProcessQuery.watch().valueChanges.pipe(
      first(),
      map(({data}: any) => data.getProcess),
    );
  }

  public getProcessByID(id: string): Observable<Response> {
    return this.getProcessByIDQuery.watch({id}).valueChanges.pipe(first(), map(({data}: any) => data.getProcessByID));
  }

  public getTokensByQueueId(id: string): Observable<Response<TokenModel[]>> {
    return this.getTokensByQueueIdQuery.watch({queue_id: id}).valueChanges.pipe(first(), map(({data}: any) => data.getTokensByQueue));
  }

  public deleteTokenUserByTokenId(tokenId: number): Observable<Response> {
    return this.deleteTokensUserByTokenIdQuery.mutate({token_id: tokenId}).pipe(map(({data}: any) => data.deleteTokenUsersByTokenId));
  }

  public getTokenUserByQueueId(queueId: string): Observable<Response<TokenUser[]>> {
    return this.getTokenUsersQuery.watch({queue_id: queueId}).valueChanges.pipe(first(), map(({data}: any) => data.getTokenUserByQueueId));
  }

  public getUserByQueueId(queueId: string): Observable<Response<UserCreationModel[]>> {
    return this.getUsersByQueueIdQuery.watch({queue_id: queueId}).valueChanges.pipe(first(), map(({data}: any) => data.getUserRolesByQueueId));
  }

  public assignWorkToUser(tokenId: number, user: string): Observable<Response> {
    return this.assignWorkQuery.mutate({token: tokenId,  user}).pipe(map(({data}: any) => data.balanceToken));
  }
}

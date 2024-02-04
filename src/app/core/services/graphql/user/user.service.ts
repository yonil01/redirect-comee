import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {User, Response} from '@app/core/models';
import {Observable} from 'rxjs';
import {
  GetUsersQuery,
  GetUserByIDQuery,
  CreateUserQuery,
  UpdateUserQuery,
  DeleteUserQuery,
  BlockUserQuery,
  UnBlockUserQuery,
  LogoutUserQuery,
  GetUsersQueryCpy,
  GetRoles,
  GetRolesById,
  ChangePass,
  ChangePassUser,
  CreateUserRolesQuery,
} from '@app/core/services/graphql/user/user.query.service';
import {HttpClient} from '@angular/common/http';
import {EnvServiceProvider} from '../../env/env.service.provider';
import {JwtHelperService} from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private getUsersQuery: GetUsersQuery,
    private getUsersQuery2: GetUsersQueryCpy,
    private getUserByIDQuery: GetUserByIDQuery,
    private createUserQuery: CreateUserQuery,
    private updateUserQuery: UpdateUserQuery,
    private deleteUserQuery: DeleteUserQuery,
    private blockUserQuery: BlockUserQuery,
    private unBlockUserQuery: UnBlockUserQuery,
    private logoutUserQuery: LogoutUserQuery,
    private getRolesQry: GetRoles,
    private getRolesByIdQry: GetRolesById,
    private changePassQry: ChangePass,
    private changepwdUserQry: ChangePassUser,
    private createUserRolesQuery: CreateUserRolesQuery,
    private _httpClient: HttpClient,
  ) {
  }

  public getUserByID(id: string): Observable<Response> {
    return this.getUserByIDQuery
      .watch({
        id,
      })
      .valueChanges.pipe(map(({data}: any) => data.getUserByID));
  }

  public getAllUsers(): Observable<Response> {
    return this.getUsersQuery.watch({}).valueChanges.pipe(map(({data}: any) => data.getUsers));
  }

  public getAllUsers2(): Observable<Response> {
    return this.getUsersQuery2.watch({}).valueChanges.pipe(map(({data}: any) => data.getUsers));
  }

  public createUser(user: User): Observable<Response> {
    return this.createUserQuery
      .mutate({
        rq: {data: user},
      })
      .pipe(map(({data}: any) => data.createUser));
  }

  public updateUser(user: User): Observable<Response> {
    return this.updateUserQuery
      .mutate({
        rq: {data: user},
      })
      .pipe(map(({data}: any) => data.updateUser));
  }

  public deleteUser(user: string): Observable<Response> {
    return this.deleteUserQuery
      .mutate({
        id: user,
      })
      .pipe(map(({data}: any) => data.deleteUser));
  }

  public blockUser(user: string): Observable<Response> {
    return this.blockUserQuery
      .mutate({
        id: user,
      })
      .pipe(map(({data}: any) => data.blockUser));
  }

  public unblockUser(user: string): Observable<Response> {
    return this.unBlockUserQuery
      .mutate({
        id: user,
      })
      .pipe(map(({data}: any) => data.unblockUser));
  }

  public getRoles(): Observable<Response> {
    return this.getRolesQry.watch({}).valueChanges.pipe(map(({data}: any) => data.getRoles));
  }

  public getRolesById(ide: string): Observable<Response> {
    return this.getRolesByIdQry.watch({
      id: ide,
    }).valueChanges.pipe(map(({data}: any) => data.getRoleByID));
  }

  public changePassAdm(user: string, pass: string, passConfirm: string): Observable<Response> {
    return this.changePassQry
      .mutate({
        id: user,
        password: pass,
        Password_confirm: passConfirm,
      })
      .pipe(map(({data}: any) => data.UpdatePasswordByAdminstrator));
  }

  public changePassUser(user: string, pass: string, passConfirm: string, passOld: string): Observable<Response> {
    return this.changepwdUserQry
      .mutate({
        id: user,
        password: pass,
        Password_confirm: passConfirm,
        Password_old: passOld,
      })
      .pipe(map(({data}: any) => data.UpdatePasswordByUser));
  }

  public validateUserPassword(password: any): any {
    const url = EnvServiceProvider.useFactory().REST_API + '/api/v1/auth/password-policy';
    return this._httpClient.post(url, password).pipe(map((res) => res));
  }

  public getTokenUser(): any {
    let user: any;
    const token = sessionStorage.getItem('Token');
    if (token) {
      user = helper.decodeToken(token);
    }
    return user;
  }
}

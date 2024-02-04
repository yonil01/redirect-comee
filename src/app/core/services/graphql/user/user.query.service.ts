import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Mutation, Query } from 'apollo-angular';
@Injectable({
  providedIn: 'root',
})
export class GetUsersQueryCpy extends Query<Response> {
  document = gql`
    query getUsers {
      getUsers {
        error
        data {
          id
          status
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
export class GetUsersQuery extends Query<Response> {
  document = gql`
    query getUsers {
      getUsers {
        error
        data {
          identification_type
          identification_number
          id
          username
          name
          last_name
          email_notifications
          roles {
            name
          }
          status
          created_at
          security_entities {
            id
            attributes {
              id
              value
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
export class GetUserByIDQuery extends Query<Response> {
  document = gql`
    query getUserByID($id: String!) {
      getUserByID(id: $id) {
        error
        data {
          id
          name
          last_name
          email_notifications
          status
          roles {
            id
          }
          last_change_password
          block_date
          change_password
          change_password_days_left
          security_entities {
            id
            attributes {
              id
              value
              enable
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
export class CreateUserQuery extends Mutation {
  document = gql`
    mutation createUser($rq: RequestNewUser!) {
      createUser(input: $rq) {
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
// definicion nueva clase para crear Roles
export class CreateUserRolesQuery extends Mutation {
  document = gql`
    mutation createUsersRoles($req: RequestNewUsersRoles!) {
      createUsersRoles(input: $req) {
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
export class UpdateUserQuery extends Mutation {
  document = gql`
    mutation updateUser($rq: RequestUser!) {
      updateUser(input: $rq) {
        error
        data {
          id
          name
          last_name
          email_notifications
          identification_number
          identification_type
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
export class DeleteUserQuery extends Mutation {
  document = gql`
    mutation deleteUser($id: String!) {
      deleteUser(id: $id) {
        error
        data {
          id
          name
          last_name
          password
          email_notifications
          status
          client_id
          real_ip
          host_name
          time_out
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
export class BlockUserQuery extends Mutation {
  document = gql`
    mutation blockUser($id: String!) {
      blockUser(id: $id) {
        error
        data {
          id
        }
        code
        type
        token
        msg
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class UnBlockUserQuery extends Mutation {
  document = gql`
    mutation unblockUser($id: String!) {
      unblockUser(id: $id) {
        error
        data {
          id
        }
        code
        type
        token
        msg
      }
    }
  `;
}
@Injectable({
  providedIn: 'root',
})
export class LogoutUserQuery extends Mutation {
  document = gql`
    mutation logout($id: String!) {
      logout(id: $id) {
        error
        data {
          id
        }
        code
        type
        token
        msg
      }
    }
  `;
}

@Injectable({
  providedIn: 'root',
})
export class GetRoles extends Query<Response> {
  document = gql`
    query getRoles {
      getRoles {
        error
        data {
          id
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
export class GetRolesById extends Query<Response> {
  document = gql`
    query getRoleByID($id: ID!) {
      getRoleByID(id: $id) {
        data {
          role_allow {
            role_allow {
              id
              name
            }
            id
          }
          security_entities {
            id
            role_attribute {
              id
              value
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
export class ChangePass extends Mutation {
  document = gql`
    mutation UpdatePasswordByAdminstrator($id: String!, $password: String!, $Password_confirm: String!) {
      UpdatePasswordByAdminstrator(id: $id, password: $password, Password_confirm: $Password_confirm) {
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
export class ChangePassUser extends Mutation {
  document = gql`
    mutation UpdatePasswordByUser(
      $id: ID!
      $password: String!
      $Password_confirm: String!
      $Password_old: String!
    ) {
      UpdatePasswordByUser(
        id: $id
        password: $password
        Password_confirm: $Password_confirm
        Password_old: $Password_old
      ) {
        error
        code
        type
        msg
      }
    }
  `;
}

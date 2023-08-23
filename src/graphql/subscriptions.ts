/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAluno = /* GraphQL */ `
  subscription OnCreateAluno(
    $filter: ModelSubscriptionAlunoFilterInput
    $owner: String
  ) {
    onCreateAluno(filter: $filter, owner: $owner) {
      id
      nome
      email
      cpf
      creditos
      cursa {
        items {
          id
          monitoria
          horarios
          videoLink
          rating
          owner
          createdAt
          updatedAt
          alunoCursaId
          cursoAlunosId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAluno = /* GraphQL */ `
  subscription OnUpdateAluno(
    $filter: ModelSubscriptionAlunoFilterInput
    $owner: String
  ) {
    onUpdateAluno(filter: $filter, owner: $owner) {
      id
      nome
      email
      cpf
      creditos
      cursa {
        items {
          id
          monitoria
          horarios
          videoLink
          rating
          owner
          createdAt
          updatedAt
          alunoCursaId
          cursoAlunosId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAluno = /* GraphQL */ `
  subscription OnDeleteAluno(
    $filter: ModelSubscriptionAlunoFilterInput
    $owner: String
  ) {
    onDeleteAluno(filter: $filter, owner: $owner) {
      id
      nome
      email
      cpf
      creditos
      cursa {
        items {
          id
          monitoria
          horarios
          videoLink
          rating
          owner
          createdAt
          updatedAt
          alunoCursaId
          cursoAlunosId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProfessor = /* GraphQL */ `
  subscription OnCreateProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
    $owner: String
  ) {
    onCreateProfessor(filter: $filter, owner: $owner) {
      id
      nome
      descricao
      email
      cpf
      leciona {
        items {
          id
          nome
          preco
          descricao
          rating
          cursoGrupo
          owner
          createdAt
          updatedAt
          professorLecionaId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProfessor = /* GraphQL */ `
  subscription OnUpdateProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
    $owner: String
  ) {
    onUpdateProfessor(filter: $filter, owner: $owner) {
      id
      nome
      descricao
      email
      cpf
      leciona {
        items {
          id
          nome
          preco
          descricao
          rating
          cursoGrupo
          owner
          createdAt
          updatedAt
          professorLecionaId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProfessor = /* GraphQL */ `
  subscription OnDeleteProfessor(
    $filter: ModelSubscriptionProfessorFilterInput
    $owner: String
  ) {
    onDeleteProfessor(filter: $filter, owner: $owner) {
      id
      nome
      descricao
      email
      cpf
      leciona {
        items {
          id
          nome
          preco
          descricao
          rating
          cursoGrupo
          owner
          createdAt
          updatedAt
          professorLecionaId
          __typename
        }
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCurso = /* GraphQL */ `
  subscription OnCreateCurso(
    $filter: ModelSubscriptionCursoFilterInput
    $owner: String
  ) {
    onCreateCurso(filter: $filter, owner: $owner) {
      id
      nome
      preco
      descricao
      professor {
        id
        nome
        descricao
        email
        cpf
        leciona {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      modulos {
        items {
          id
          titulo
          descricao
          videoLink
          owner
          createdAt
          updatedAt
          cursoModulosId
          __typename
        }
        nextToken
        __typename
      }
      rating
      alunos {
        items {
          id
          monitoria
          horarios
          videoLink
          rating
          owner
          createdAt
          updatedAt
          alunoCursaId
          cursoAlunosId
          __typename
        }
        nextToken
        __typename
      }
      cursoGrupo
      owner
      createdAt
      updatedAt
      professorLecionaId
      __typename
    }
  }
`;
export const onUpdateCurso = /* GraphQL */ `
  subscription OnUpdateCurso(
    $filter: ModelSubscriptionCursoFilterInput
    $owner: String
  ) {
    onUpdateCurso(filter: $filter, owner: $owner) {
      id
      nome
      preco
      descricao
      professor {
        id
        nome
        descricao
        email
        cpf
        leciona {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      modulos {
        items {
          id
          titulo
          descricao
          videoLink
          owner
          createdAt
          updatedAt
          cursoModulosId
          __typename
        }
        nextToken
        __typename
      }
      rating
      alunos {
        items {
          id
          monitoria
          horarios
          videoLink
          rating
          owner
          createdAt
          updatedAt
          alunoCursaId
          cursoAlunosId
          __typename
        }
        nextToken
        __typename
      }
      cursoGrupo
      owner
      createdAt
      updatedAt
      professorLecionaId
      __typename
    }
  }
`;
export const onDeleteCurso = /* GraphQL */ `
  subscription OnDeleteCurso(
    $filter: ModelSubscriptionCursoFilterInput
    $owner: String
  ) {
    onDeleteCurso(filter: $filter, owner: $owner) {
      id
      nome
      preco
      descricao
      professor {
        id
        nome
        descricao
        email
        cpf
        leciona {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      modulos {
        items {
          id
          titulo
          descricao
          videoLink
          owner
          createdAt
          updatedAt
          cursoModulosId
          __typename
        }
        nextToken
        __typename
      }
      rating
      alunos {
        items {
          id
          monitoria
          horarios
          videoLink
          rating
          owner
          createdAt
          updatedAt
          alunoCursaId
          cursoAlunosId
          __typename
        }
        nextToken
        __typename
      }
      cursoGrupo
      owner
      createdAt
      updatedAt
      professorLecionaId
      __typename
    }
  }
`;

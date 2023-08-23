/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const echo = /* GraphQL */ `
  query Echo($msg: String) {
    echo(msg: $msg)
  }
`;
export const getAluno = /* GraphQL */ `
  query GetAluno($id: ID!) {
    getAluno(id: $id) {
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
export const listAlunos = /* GraphQL */ `
  query ListAlunos(
    $filter: ModelAlunoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlunos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        email
        cpf
        creditos
        cursa {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const alunosByOwner = /* GraphQL */ `
  query AlunosByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAlunoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    alunosByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nome
        email
        cpf
        creditos
        cursa {
          nextToken
          __typename
        }
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfessor = /* GraphQL */ `
  query GetProfessor($id: ID!) {
    getProfessor(id: $id) {
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
export const listProfessors = /* GraphQL */ `
  query ListProfessors(
    $filter: ModelProfessorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfessors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const professorsByOwner = /* GraphQL */ `
  query ProfessorsByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelProfessorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    professorsByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCurso = /* GraphQL */ `
  query GetCurso($id: ID!) {
    getCurso(id: $id) {
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
export const listCursos = /* GraphQL */ `
  query ListCursos(
    $filter: ModelCursoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCursos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          owner
          createdAt
          updatedAt
          __typename
        }
        modulos {
          nextToken
          __typename
        }
        rating
        alunos {
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
      nextToken
      __typename
    }
  }
`;

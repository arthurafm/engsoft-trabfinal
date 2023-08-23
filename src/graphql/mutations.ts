/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAluno = /* GraphQL */ `
  mutation CreateAluno(
    $input: CreateAlunoInput!
    $condition: ModelAlunoConditionInput
  ) {
    createAluno(input: $input, condition: $condition) {
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
export const updateAluno = /* GraphQL */ `
  mutation UpdateAluno(
    $input: UpdateAlunoInput!
    $condition: ModelAlunoConditionInput
  ) {
    updateAluno(input: $input, condition: $condition) {
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
export const deleteAluno = /* GraphQL */ `
  mutation DeleteAluno(
    $input: DeleteAlunoInput!
    $condition: ModelAlunoConditionInput
  ) {
    deleteAluno(input: $input, condition: $condition) {
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
export const createProfessor = /* GraphQL */ `
  mutation CreateProfessor(
    $input: CreateProfessorInput!
    $condition: ModelProfessorConditionInput
  ) {
    createProfessor(input: $input, condition: $condition) {
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
export const updateProfessor = /* GraphQL */ `
  mutation UpdateProfessor(
    $input: UpdateProfessorInput!
    $condition: ModelProfessorConditionInput
  ) {
    updateProfessor(input: $input, condition: $condition) {
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
export const deleteProfessor = /* GraphQL */ `
  mutation DeleteProfessor(
    $input: DeleteProfessorInput!
    $condition: ModelProfessorConditionInput
  ) {
    deleteProfessor(input: $input, condition: $condition) {
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
export const createCurso = /* GraphQL */ `
  mutation CreateCurso(
    $input: CreateCursoInput!
    $condition: ModelCursoConditionInput
  ) {
    createCurso(input: $input, condition: $condition) {
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
export const updateCurso = /* GraphQL */ `
  mutation UpdateCurso(
    $input: UpdateCursoInput!
    $condition: ModelCursoConditionInput
  ) {
    updateCurso(input: $input, condition: $condition) {
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
export const deleteCurso = /* GraphQL */ `
  mutation DeleteCurso(
    $input: DeleteCursoInput!
    $condition: ModelCursoConditionInput
  ) {
    deleteCurso(input: $input, condition: $condition) {
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
export const createAlunoCurso = /* GraphQL */ `
  mutation CreateAlunoCurso(
    $input: CreateAlunoCursoInput!
    $condition: ModelAlunoCursoConditionInput
  ) {
    createAlunoCurso(input: $input, condition: $condition) {
      id
      aluno {
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
      curso {
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
      monitoria
      horarios
      rating
      owner
      createdAt
      updatedAt
      alunoCursaId
      cursoAlunosId
      __typename
    }
  }
`;
export const updateAlunoCurso = /* GraphQL */ `
  mutation UpdateAlunoCurso(
    $input: UpdateAlunoCursoInput!
    $condition: ModelAlunoCursoConditionInput
  ) {
    updateAlunoCurso(input: $input, condition: $condition) {
      id
      aluno {
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
      curso {
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
      monitoria
      horarios
      rating
      owner
      createdAt
      updatedAt
      alunoCursaId
      cursoAlunosId
      __typename
    }
  }
`;
export const deleteAlunoCurso = /* GraphQL */ `
  mutation DeleteAlunoCurso(
    $input: DeleteAlunoCursoInput!
    $condition: ModelAlunoCursoConditionInput
  ) {
    deleteAlunoCurso(input: $input, condition: $condition) {
      id
      aluno {
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
      curso {
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
      monitoria
      horarios
      rating
      owner
      createdAt
      updatedAt
      alunoCursaId
      cursoAlunosId
      __typename
    }
  }
`;
export const createModulo = /* GraphQL */ `
  mutation CreateModulo(
    $input: CreateModuloInput!
    $condition: ModelModuloConditionInput
  ) {
    createModulo(input: $input, condition: $condition) {
      id
      titulo
      descricao
      videoLink
      curso {
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
      owner
      createdAt
      updatedAt
      cursoModulosId
      __typename
    }
  }
`;
export const updateModulo = /* GraphQL */ `
  mutation UpdateModulo(
    $input: UpdateModuloInput!
    $condition: ModelModuloConditionInput
  ) {
    updateModulo(input: $input, condition: $condition) {
      id
      titulo
      descricao
      videoLink
      curso {
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
      owner
      createdAt
      updatedAt
      cursoModulosId
      __typename
    }
  }
`;
export const deleteModulo = /* GraphQL */ `
  mutation DeleteModulo(
    $input: DeleteModuloInput!
    $condition: ModelModuloConditionInput
  ) {
    deleteModulo(input: $input, condition: $condition) {
      id
      titulo
      descricao
      videoLink
      curso {
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
      owner
      createdAt
      updatedAt
      cursoModulosId
      __typename
    }
  }
`;
export const comprarCurso = /* GraphQL */ `
  mutation ComprarCurso($cursoId: ID!) {
    comprarCurso(cursoId: $cursoId) {
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
export const adiconarAlunoComoMonitor = /* GraphQL */ `
  mutation AdiconarAlunoComoMonitor(
    $alunoId: ID!
    $cursoId: ID!
    $alunoHorarios: String!
  ) {
    adiconarAlunoComoMonitor(
      alunoId: $alunoId
      cursoId: $cursoId
      alunoHorarios: $alunoHorarios
    ) {
      id
      aluno {
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
      curso {
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
      monitoria
      horarios
      rating
      owner
      createdAt
      updatedAt
      alunoCursaId
      cursoAlunosId
      __typename
    }
  }
`;
export const criarCurso = /* GraphQL */ `
  mutation CriarCurso($nome: String!, $preco: Float!, $descricao: String!) {
    criarCurso(nome: $nome, preco: $preco, descricao: $descricao) {
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

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAlunoInput = {
  id?: string | null,
  nome: string,
  email?: string | null,
  cpf?: string | null,
  creditos: number,
  owner: string,
};

export type ModelAlunoConditionInput = {
  nome?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  creditos?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAlunoConditionInput | null > | null,
  or?: Array< ModelAlunoConditionInput | null > | null,
  not?: ModelAlunoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Aluno = {
  __typename: "Aluno",
  id: string,
  nome: string,
  email?: string | null,
  cpf?: string | null,
  creditos: number,
  cursa?: ModelAlunoCursoConnection | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelAlunoCursoConnection = {
  __typename: "ModelAlunoCursoConnection",
  items:  Array<AlunoCurso | null >,
  nextToken?: string | null,
};

export type AlunoCurso = {
  __typename: "AlunoCurso",
  id: string,
  aluno?: Aluno | null,
  curso?: Curso | null,
  monitoria: boolean,
  horarios?: string | null,
  videoLink?: string | null,
  rating?: number | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
  alunoCursaId?: string | null,
  cursoAlunosId?: string | null,
};

export type Curso = {
  __typename: "Curso",
  id?: string | null,
  nome?: string | null,
  preco?: number | null,
  descricao?: string | null,
  professor?: Professor | null,
  modulos?: ModelModuloConnection | null,
  rating?: number | null,
  alunos?: ModelAlunoCursoConnection | null,
  cursoGrupo?: string | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  professorLecionaId?: string | null,
};

export type Professor = {
  __typename: "Professor",
  id: string,
  nome: string,
  descricao?: string | null,
  email?: string | null,
  cpf?: string | null,
  leciona?: ModelCursoConnection | null,
  owner: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelCursoConnection = {
  __typename: "ModelCursoConnection",
  items:  Array<Curso | null >,
  nextToken?: string | null,
};

export type ModelModuloConnection = {
  __typename: "ModelModuloConnection",
  items:  Array<Modulo | null >,
  nextToken?: string | null,
};

export type Modulo = {
  __typename: "Modulo",
  id: string,
  titulo: string,
  descricao: string,
  videoLink: string,
  curso: Curso,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  cursoModulosId?: string | null,
};

export type UpdateAlunoInput = {
  id: string,
  nome?: string | null,
  email?: string | null,
  cpf?: string | null,
  creditos?: number | null,
  owner?: string | null,
};

export type DeleteAlunoInput = {
  id: string,
};

export type CreateProfessorInput = {
  id?: string | null,
  nome: string,
  descricao?: string | null,
  email?: string | null,
  cpf?: string | null,
  owner: string,
};

export type ModelProfessorConditionInput = {
  nome?: ModelStringInput | null,
  descricao?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelProfessorConditionInput | null > | null,
  or?: Array< ModelProfessorConditionInput | null > | null,
  not?: ModelProfessorConditionInput | null,
};

export type UpdateProfessorInput = {
  id: string,
  nome?: string | null,
  descricao?: string | null,
  email?: string | null,
  cpf?: string | null,
  owner?: string | null,
};

export type DeleteProfessorInput = {
  id: string,
};

export type CreateCursoInput = {
  id?: string | null,
  nome?: string | null,
  preco?: number | null,
  descricao?: string | null,
  rating?: number | null,
  cursoGrupo?: string | null,
  owner?: string | null,
  professorLecionaId?: string | null,
};

export type ModelCursoConditionInput = {
  nome?: ModelStringInput | null,
  preco?: ModelFloatInput | null,
  descricao?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  cursoGrupo?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCursoConditionInput | null > | null,
  or?: Array< ModelCursoConditionInput | null > | null,
  not?: ModelCursoConditionInput | null,
  professorLecionaId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCursoInput = {
  id: string,
  nome?: string | null,
  preco?: number | null,
  descricao?: string | null,
  rating?: number | null,
  cursoGrupo?: string | null,
  owner?: string | null,
  professorLecionaId?: string | null,
};

export type DeleteCursoInput = {
  id: string,
};

export type CreateAlunoCursoInput = {
  id?: string | null,
  monitoria: boolean,
  horarios?: string | null,
  videoLink?: string | null,
  rating?: number | null,
  owner: string,
  alunoCursaId?: string | null,
  cursoAlunosId?: string | null,
};

export type ModelAlunoCursoConditionInput = {
  monitoria?: ModelBooleanInput | null,
  horarios?: ModelStringInput | null,
  videoLink?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAlunoCursoConditionInput | null > | null,
  or?: Array< ModelAlunoCursoConditionInput | null > | null,
  not?: ModelAlunoCursoConditionInput | null,
  alunoCursaId?: ModelIDInput | null,
  cursoAlunosId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAlunoCursoInput = {
  id: string,
  monitoria?: boolean | null,
  horarios?: string | null,
  videoLink?: string | null,
  rating?: number | null,
  owner?: string | null,
  alunoCursaId?: string | null,
  cursoAlunosId?: string | null,
};

export type DeleteAlunoCursoInput = {
  id: string,
};

export type CreateModuloInput = {
  id?: string | null,
  titulo: string,
  descricao: string,
  videoLink: string,
  owner?: string | null,
  cursoModulosId?: string | null,
};

export type ModelModuloConditionInput = {
  titulo?: ModelStringInput | null,
  descricao?: ModelStringInput | null,
  videoLink?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelModuloConditionInput | null > | null,
  or?: Array< ModelModuloConditionInput | null > | null,
  not?: ModelModuloConditionInput | null,
  cursoModulosId?: ModelIDInput | null,
};

export type UpdateModuloInput = {
  id: string,
  titulo?: string | null,
  descricao?: string | null,
  videoLink?: string | null,
  owner?: string | null,
  cursoModulosId?: string | null,
};

export type DeleteModuloInput = {
  id: string,
};

export type ModelAlunoFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  creditos?: ModelIntInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelAlunoFilterInput | null > | null,
  or?: Array< ModelAlunoFilterInput | null > | null,
  not?: ModelAlunoFilterInput | null,
};

export type ModelAlunoConnection = {
  __typename: "ModelAlunoConnection",
  items:  Array<Aluno | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProfessorFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  descricao?: ModelStringInput | null,
  email?: ModelStringInput | null,
  cpf?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelProfessorFilterInput | null > | null,
  or?: Array< ModelProfessorFilterInput | null > | null,
  not?: ModelProfessorFilterInput | null,
};

export type ModelProfessorConnection = {
  __typename: "ModelProfessorConnection",
  items:  Array<Professor | null >,
  nextToken?: string | null,
};

export type ModelCursoFilterInput = {
  id?: ModelIDInput | null,
  nome?: ModelStringInput | null,
  preco?: ModelFloatInput | null,
  descricao?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  cursoGrupo?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelCursoFilterInput | null > | null,
  or?: Array< ModelCursoFilterInput | null > | null,
  not?: ModelCursoFilterInput | null,
  professorLecionaId?: ModelIDInput | null,
};

export type ModelSubscriptionAlunoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nome?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  cpf?: ModelSubscriptionStringInput | null,
  creditos?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionAlunoFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlunoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProfessorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nome?: ModelSubscriptionStringInput | null,
  descricao?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  cpf?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfessorFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfessorFilterInput | null > | null,
};

export type ModelSubscriptionCursoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nome?: ModelSubscriptionStringInput | null,
  preco?: ModelSubscriptionFloatInput | null,
  descricao?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionCursoFilterInput | null > | null,
  or?: Array< ModelSubscriptionCursoFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateAlunoMutationVariables = {
  input: CreateAlunoInput,
  condition?: ModelAlunoConditionInput | null,
};

export type CreateAlunoMutation = {
  createAluno?:  {
    __typename: "Aluno",
    id: string,
    nome: string,
    email?: string | null,
    cpf?: string | null,
    creditos: number,
    cursa?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAlunoMutationVariables = {
  input: UpdateAlunoInput,
  condition?: ModelAlunoConditionInput | null,
};

export type UpdateAlunoMutation = {
  updateAluno?:  {
    __typename: "Aluno",
    id: string,
    nome: string,
    email?: string | null,
    cpf?: string | null,
    creditos: number,
    cursa?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAlunoMutationVariables = {
  input: DeleteAlunoInput,
  condition?: ModelAlunoConditionInput | null,
};

export type DeleteAlunoMutation = {
  deleteAluno?:  {
    __typename: "Aluno",
    id: string,
    nome: string,
    email?: string | null,
    cpf?: string | null,
    creditos: number,
    cursa?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfessorMutationVariables = {
  input: CreateProfessorInput,
  condition?: ModelProfessorConditionInput | null,
};

export type CreateProfessorMutation = {
  createProfessor?:  {
    __typename: "Professor",
    id: string,
    nome: string,
    descricao?: string | null,
    email?: string | null,
    cpf?: string | null,
    leciona?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id?: string | null,
        nome?: string | null,
        preco?: number | null,
        descricao?: string | null,
        rating?: number | null,
        cursoGrupo?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        professorLecionaId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfessorMutationVariables = {
  input: UpdateProfessorInput,
  condition?: ModelProfessorConditionInput | null,
};

export type UpdateProfessorMutation = {
  updateProfessor?:  {
    __typename: "Professor",
    id: string,
    nome: string,
    descricao?: string | null,
    email?: string | null,
    cpf?: string | null,
    leciona?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id?: string | null,
        nome?: string | null,
        preco?: number | null,
        descricao?: string | null,
        rating?: number | null,
        cursoGrupo?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        professorLecionaId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfessorMutationVariables = {
  input: DeleteProfessorInput,
  condition?: ModelProfessorConditionInput | null,
};

export type DeleteProfessorMutation = {
  deleteProfessor?:  {
    __typename: "Professor",
    id: string,
    nome: string,
    descricao?: string | null,
    email?: string | null,
    cpf?: string | null,
    leciona?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id?: string | null,
        nome?: string | null,
        preco?: number | null,
        descricao?: string | null,
        rating?: number | null,
        cursoGrupo?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        professorLecionaId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCursoMutationVariables = {
  input: CreateCursoInput,
  condition?: ModelCursoConditionInput | null,
};

export type CreateCursoMutation = {
  createCurso?:  {
    __typename: "Curso",
    id?: string | null,
    nome?: string | null,
    preco?: number | null,
    descricao?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    modulos?:  {
      __typename: "ModelModuloConnection",
      items:  Array< {
        __typename: "Modulo",
        id: string,
        titulo: string,
        descricao: string,
        videoLink: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        cursoModulosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    rating?: number | null,
    alunos?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cursoGrupo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    professorLecionaId?: string | null,
  } | null,
};

export type UpdateCursoMutationVariables = {
  input: UpdateCursoInput,
  condition?: ModelCursoConditionInput | null,
};

export type UpdateCursoMutation = {
  updateCurso?:  {
    __typename: "Curso",
    id?: string | null,
    nome?: string | null,
    preco?: number | null,
    descricao?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    modulos?:  {
      __typename: "ModelModuloConnection",
      items:  Array< {
        __typename: "Modulo",
        id: string,
        titulo: string,
        descricao: string,
        videoLink: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        cursoModulosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    rating?: number | null,
    alunos?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cursoGrupo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    professorLecionaId?: string | null,
  } | null,
};

export type DeleteCursoMutationVariables = {
  input: DeleteCursoInput,
  condition?: ModelCursoConditionInput | null,
};

export type DeleteCursoMutation = {
  deleteCurso?:  {
    __typename: "Curso",
    id?: string | null,
    nome?: string | null,
    preco?: number | null,
    descricao?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    modulos?:  {
      __typename: "ModelModuloConnection",
      items:  Array< {
        __typename: "Modulo",
        id: string,
        titulo: string,
        descricao: string,
        videoLink: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        cursoModulosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    rating?: number | null,
    alunos?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cursoGrupo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    professorLecionaId?: string | null,
  } | null,
};

export type CreateAlunoCursoMutationVariables = {
  input: CreateAlunoCursoInput,
  condition?: ModelAlunoCursoConditionInput | null,
};

export type CreateAlunoCursoMutation = {
  createAlunoCurso?:  {
    __typename: "AlunoCurso",
    id: string,
    aluno?:  {
      __typename: "Aluno",
      id: string,
      nome: string,
      email?: string | null,
      cpf?: string | null,
      creditos: number,
      cursa?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    curso?:  {
      __typename: "Curso",
      id?: string | null,
      nome?: string | null,
      preco?: number | null,
      descricao?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        nome: string,
        descricao?: string | null,
        email?: string | null,
        cpf?: string | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      modulos?:  {
        __typename: "ModelModuloConnection",
        nextToken?: string | null,
      } | null,
      rating?: number | null,
      alunos?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      cursoGrupo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      professorLecionaId?: string | null,
    } | null,
    monitoria: boolean,
    horarios?: string | null,
    videoLink?: string | null,
    rating?: number | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    alunoCursaId?: string | null,
    cursoAlunosId?: string | null,
  } | null,
};

export type UpdateAlunoCursoMutationVariables = {
  input: UpdateAlunoCursoInput,
  condition?: ModelAlunoCursoConditionInput | null,
};

export type UpdateAlunoCursoMutation = {
  updateAlunoCurso?:  {
    __typename: "AlunoCurso",
    id: string,
    aluno?:  {
      __typename: "Aluno",
      id: string,
      nome: string,
      email?: string | null,
      cpf?: string | null,
      creditos: number,
      cursa?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    curso?:  {
      __typename: "Curso",
      id?: string | null,
      nome?: string | null,
      preco?: number | null,
      descricao?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        nome: string,
        descricao?: string | null,
        email?: string | null,
        cpf?: string | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      modulos?:  {
        __typename: "ModelModuloConnection",
        nextToken?: string | null,
      } | null,
      rating?: number | null,
      alunos?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      cursoGrupo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      professorLecionaId?: string | null,
    } | null,
    monitoria: boolean,
    horarios?: string | null,
    videoLink?: string | null,
    rating?: number | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    alunoCursaId?: string | null,
    cursoAlunosId?: string | null,
  } | null,
};

export type DeleteAlunoCursoMutationVariables = {
  input: DeleteAlunoCursoInput,
  condition?: ModelAlunoCursoConditionInput | null,
};

export type DeleteAlunoCursoMutation = {
  deleteAlunoCurso?:  {
    __typename: "AlunoCurso",
    id: string,
    aluno?:  {
      __typename: "Aluno",
      id: string,
      nome: string,
      email?: string | null,
      cpf?: string | null,
      creditos: number,
      cursa?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    curso?:  {
      __typename: "Curso",
      id?: string | null,
      nome?: string | null,
      preco?: number | null,
      descricao?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        nome: string,
        descricao?: string | null,
        email?: string | null,
        cpf?: string | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      modulos?:  {
        __typename: "ModelModuloConnection",
        nextToken?: string | null,
      } | null,
      rating?: number | null,
      alunos?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      cursoGrupo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      professorLecionaId?: string | null,
    } | null,
    monitoria: boolean,
    horarios?: string | null,
    videoLink?: string | null,
    rating?: number | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    alunoCursaId?: string | null,
    cursoAlunosId?: string | null,
  } | null,
};

export type CreateModuloMutationVariables = {
  input: CreateModuloInput,
  condition?: ModelModuloConditionInput | null,
};

export type CreateModuloMutation = {
  createModulo?:  {
    __typename: "Modulo",
    id: string,
    titulo: string,
    descricao: string,
    videoLink: string,
    curso:  {
      __typename: "Curso",
      id?: string | null,
      nome?: string | null,
      preco?: number | null,
      descricao?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        nome: string,
        descricao?: string | null,
        email?: string | null,
        cpf?: string | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      modulos?:  {
        __typename: "ModelModuloConnection",
        nextToken?: string | null,
      } | null,
      rating?: number | null,
      alunos?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      cursoGrupo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      professorLecionaId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    cursoModulosId?: string | null,
  } | null,
};

export type UpdateModuloMutationVariables = {
  input: UpdateModuloInput,
  condition?: ModelModuloConditionInput | null,
};

export type UpdateModuloMutation = {
  updateModulo?:  {
    __typename: "Modulo",
    id: string,
    titulo: string,
    descricao: string,
    videoLink: string,
    curso:  {
      __typename: "Curso",
      id?: string | null,
      nome?: string | null,
      preco?: number | null,
      descricao?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        nome: string,
        descricao?: string | null,
        email?: string | null,
        cpf?: string | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      modulos?:  {
        __typename: "ModelModuloConnection",
        nextToken?: string | null,
      } | null,
      rating?: number | null,
      alunos?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      cursoGrupo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      professorLecionaId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    cursoModulosId?: string | null,
  } | null,
};

export type DeleteModuloMutationVariables = {
  input: DeleteModuloInput,
  condition?: ModelModuloConditionInput | null,
};

export type DeleteModuloMutation = {
  deleteModulo?:  {
    __typename: "Modulo",
    id: string,
    titulo: string,
    descricao: string,
    videoLink: string,
    curso:  {
      __typename: "Curso",
      id?: string | null,
      nome?: string | null,
      preco?: number | null,
      descricao?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        nome: string,
        descricao?: string | null,
        email?: string | null,
        cpf?: string | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      modulos?:  {
        __typename: "ModelModuloConnection",
        nextToken?: string | null,
      } | null,
      rating?: number | null,
      alunos?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      cursoGrupo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      professorLecionaId?: string | null,
    },
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    cursoModulosId?: string | null,
  } | null,
};

export type ComprarCursoMutationVariables = {
  cursoId: string,
};

export type ComprarCursoMutation = {
  comprarCurso:  {
    __typename: "Curso",
    id?: string | null,
    nome?: string | null,
    preco?: number | null,
    descricao?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    modulos?:  {
      __typename: "ModelModuloConnection",
      items:  Array< {
        __typename: "Modulo",
        id: string,
        titulo: string,
        descricao: string,
        videoLink: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        cursoModulosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    rating?: number | null,
    alunos?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cursoGrupo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    professorLecionaId?: string | null,
  },
};

export type AdiconarAlunoComoMonitorMutationVariables = {
  alunoId: string,
  cursoId: string,
  horarios: string,
  videoLink?: string | null,
};

export type AdiconarAlunoComoMonitorMutation = {
  adiconarAlunoComoMonitor:  {
    __typename: "AlunoCurso",
    id: string,
    aluno?:  {
      __typename: "Aluno",
      id: string,
      nome: string,
      email?: string | null,
      cpf?: string | null,
      creditos: number,
      cursa?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    curso?:  {
      __typename: "Curso",
      id?: string | null,
      nome?: string | null,
      preco?: number | null,
      descricao?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        nome: string,
        descricao?: string | null,
        email?: string | null,
        cpf?: string | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      modulos?:  {
        __typename: "ModelModuloConnection",
        nextToken?: string | null,
      } | null,
      rating?: number | null,
      alunos?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      cursoGrupo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      professorLecionaId?: string | null,
    } | null,
    monitoria: boolean,
    horarios?: string | null,
    videoLink?: string | null,
    rating?: number | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
    alunoCursaId?: string | null,
    cursoAlunosId?: string | null,
  },
};

export type CriarCursoMutationVariables = {
  nome: string,
  preco: number,
  descricao: string,
};

export type CriarCursoMutation = {
  criarCurso:  {
    __typename: "Curso",
    id?: string | null,
    nome?: string | null,
    preco?: number | null,
    descricao?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    modulos?:  {
      __typename: "ModelModuloConnection",
      items:  Array< {
        __typename: "Modulo",
        id: string,
        titulo: string,
        descricao: string,
        videoLink: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        cursoModulosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    rating?: number | null,
    alunos?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cursoGrupo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    professorLecionaId?: string | null,
  },
};

export type EchoQueryVariables = {
  msg?: string | null,
};

export type EchoQuery = {
  echo?: string | null,
};

export type GetAlunoQueryVariables = {
  id: string,
};

export type GetAlunoQuery = {
  getAluno?:  {
    __typename: "Aluno",
    id: string,
    nome: string,
    email?: string | null,
    cpf?: string | null,
    creditos: number,
    cursa?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAlunosQueryVariables = {
  filter?: ModelAlunoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlunosQuery = {
  listAlunos?:  {
    __typename: "ModelAlunoConnection",
    items:  Array< {
      __typename: "Aluno",
      id: string,
      nome: string,
      email?: string | null,
      cpf?: string | null,
      creditos: number,
      cursa?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AlunosByOwnerQueryVariables = {
  owner: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAlunoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AlunosByOwnerQuery = {
  alunosByOwner?:  {
    __typename: "ModelAlunoConnection",
    items:  Array< {
      __typename: "Aluno",
      id: string,
      nome: string,
      email?: string | null,
      cpf?: string | null,
      creditos: number,
      cursa?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfessorQueryVariables = {
  id: string,
};

export type GetProfessorQuery = {
  getProfessor?:  {
    __typename: "Professor",
    id: string,
    nome: string,
    descricao?: string | null,
    email?: string | null,
    cpf?: string | null,
    leciona?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id?: string | null,
        nome?: string | null,
        preco?: number | null,
        descricao?: string | null,
        rating?: number | null,
        cursoGrupo?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        professorLecionaId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfessorsQueryVariables = {
  filter?: ModelProfessorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfessorsQuery = {
  listProfessors?:  {
    __typename: "ModelProfessorConnection",
    items:  Array< {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProfessorsByOwnerQueryVariables = {
  owner: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfessorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfessorsByOwnerQuery = {
  professorsByOwner?:  {
    __typename: "ModelProfessorConnection",
    items:  Array< {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCursoQueryVariables = {
  id: string,
};

export type GetCursoQuery = {
  getCurso?:  {
    __typename: "Curso",
    id?: string | null,
    nome?: string | null,
    preco?: number | null,
    descricao?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    modulos?:  {
      __typename: "ModelModuloConnection",
      items:  Array< {
        __typename: "Modulo",
        id: string,
        titulo: string,
        descricao: string,
        videoLink: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        cursoModulosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    rating?: number | null,
    alunos?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cursoGrupo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    professorLecionaId?: string | null,
  } | null,
};

export type ListCursosQueryVariables = {
  filter?: ModelCursoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCursosQuery = {
  listCursos?:  {
    __typename: "ModelCursoConnection",
    items:  Array< {
      __typename: "Curso",
      id?: string | null,
      nome?: string | null,
      preco?: number | null,
      descricao?: string | null,
      professor?:  {
        __typename: "Professor",
        id: string,
        nome: string,
        descricao?: string | null,
        email?: string | null,
        cpf?: string | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      modulos?:  {
        __typename: "ModelModuloConnection",
        nextToken?: string | null,
      } | null,
      rating?: number | null,
      alunos?:  {
        __typename: "ModelAlunoCursoConnection",
        nextToken?: string | null,
      } | null,
      cursoGrupo?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      professorLecionaId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAlunoSubscriptionVariables = {
  filter?: ModelSubscriptionAlunoFilterInput | null,
  owner?: string | null,
};

export type OnCreateAlunoSubscription = {
  onCreateAluno?:  {
    __typename: "Aluno",
    id: string,
    nome: string,
    email?: string | null,
    cpf?: string | null,
    creditos: number,
    cursa?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAlunoSubscriptionVariables = {
  filter?: ModelSubscriptionAlunoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateAlunoSubscription = {
  onUpdateAluno?:  {
    __typename: "Aluno",
    id: string,
    nome: string,
    email?: string | null,
    cpf?: string | null,
    creditos: number,
    cursa?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAlunoSubscriptionVariables = {
  filter?: ModelSubscriptionAlunoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteAlunoSubscription = {
  onDeleteAluno?:  {
    __typename: "Aluno",
    id: string,
    nome: string,
    email?: string | null,
    cpf?: string | null,
    creditos: number,
    cursa?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfessorSubscriptionVariables = {
  filter?: ModelSubscriptionProfessorFilterInput | null,
  owner?: string | null,
};

export type OnCreateProfessorSubscription = {
  onCreateProfessor?:  {
    __typename: "Professor",
    id: string,
    nome: string,
    descricao?: string | null,
    email?: string | null,
    cpf?: string | null,
    leciona?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id?: string | null,
        nome?: string | null,
        preco?: number | null,
        descricao?: string | null,
        rating?: number | null,
        cursoGrupo?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        professorLecionaId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfessorSubscriptionVariables = {
  filter?: ModelSubscriptionProfessorFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProfessorSubscription = {
  onUpdateProfessor?:  {
    __typename: "Professor",
    id: string,
    nome: string,
    descricao?: string | null,
    email?: string | null,
    cpf?: string | null,
    leciona?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id?: string | null,
        nome?: string | null,
        preco?: number | null,
        descricao?: string | null,
        rating?: number | null,
        cursoGrupo?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        professorLecionaId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfessorSubscriptionVariables = {
  filter?: ModelSubscriptionProfessorFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProfessorSubscription = {
  onDeleteProfessor?:  {
    __typename: "Professor",
    id: string,
    nome: string,
    descricao?: string | null,
    email?: string | null,
    cpf?: string | null,
    leciona?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id?: string | null,
        nome?: string | null,
        preco?: number | null,
        descricao?: string | null,
        rating?: number | null,
        cursoGrupo?: string | null,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        professorLecionaId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCursoSubscriptionVariables = {
  filter?: ModelSubscriptionCursoFilterInput | null,
  owner?: string | null,
};

export type OnCreateCursoSubscription = {
  onCreateCurso?:  {
    __typename: "Curso",
    id?: string | null,
    nome?: string | null,
    preco?: number | null,
    descricao?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    modulos?:  {
      __typename: "ModelModuloConnection",
      items:  Array< {
        __typename: "Modulo",
        id: string,
        titulo: string,
        descricao: string,
        videoLink: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        cursoModulosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    rating?: number | null,
    alunos?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cursoGrupo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    professorLecionaId?: string | null,
  } | null,
};

export type OnUpdateCursoSubscriptionVariables = {
  filter?: ModelSubscriptionCursoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCursoSubscription = {
  onUpdateCurso?:  {
    __typename: "Curso",
    id?: string | null,
    nome?: string | null,
    preco?: number | null,
    descricao?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    modulos?:  {
      __typename: "ModelModuloConnection",
      items:  Array< {
        __typename: "Modulo",
        id: string,
        titulo: string,
        descricao: string,
        videoLink: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        cursoModulosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    rating?: number | null,
    alunos?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cursoGrupo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    professorLecionaId?: string | null,
  } | null,
};

export type OnDeleteCursoSubscriptionVariables = {
  filter?: ModelSubscriptionCursoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCursoSubscription = {
  onDeleteCurso?:  {
    __typename: "Curso",
    id?: string | null,
    nome?: string | null,
    preco?: number | null,
    descricao?: string | null,
    professor?:  {
      __typename: "Professor",
      id: string,
      nome: string,
      descricao?: string | null,
      email?: string | null,
      cpf?: string | null,
      leciona?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    modulos?:  {
      __typename: "ModelModuloConnection",
      items:  Array< {
        __typename: "Modulo",
        id: string,
        titulo: string,
        descricao: string,
        videoLink: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
        cursoModulosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    rating?: number | null,
    alunos?:  {
      __typename: "ModelAlunoCursoConnection",
      items:  Array< {
        __typename: "AlunoCurso",
        id: string,
        monitoria: boolean,
        horarios?: string | null,
        videoLink?: string | null,
        rating?: number | null,
        owner: string,
        createdAt: string,
        updatedAt: string,
        alunoCursaId?: string | null,
        cursoAlunosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    cursoGrupo?: string | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    professorLecionaId?: string | null,
  } | null,
};

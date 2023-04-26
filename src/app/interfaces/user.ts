export interface registerPersonInterface {
  idClient: string,
  nombres: string,
  apellidos: string,
  email: string,
  password: string
}

export interface UserEnterpriseInterface {
  idEnterprise: string,
  razonsocial: string,
  email: string,
  password: string
}

export interface AuthInterface {
  id: string,
  email: string,
  password: string
}
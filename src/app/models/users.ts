export class UserClientModel {
  constructor (
    public idClient: string,
    public nombres: string,
    public apellidos: string,
    public image: string,
    public email: string,
    public password: string
  ) {}
}
export class Auth {
  constructor (
    public id: string,
    public email: string,
    public password: string
  ) {}
}

export class UserEnterpriseModel {
  constructor (
    public idEnterprise: string,
    public razonsocial: string,
    public email: string,
    public password: string
  ) {}
}
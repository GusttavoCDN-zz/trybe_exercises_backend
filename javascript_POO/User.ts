export default class User {
  private nome: string;
  private email: string;
  private nascimento: Date;
  private role: string;
  private ativo: boolean;

  constructor(nome: string, email: string, nascimento: Date, role: string, ativo = true) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.role = role || 'estudante';
    this.ativo = ativo;
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}`;
  }
}

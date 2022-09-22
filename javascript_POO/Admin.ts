import User from './User.js';

class Admin extends User {
  constructor(nome: string, email: string, nascimento: Date, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeDoCurso: string, vagas: number) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
  }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', new Date('2021-01-01'));
console.log(novoAdmin.criarCurso('JS', 20));

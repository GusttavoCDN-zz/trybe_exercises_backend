import User from './User.js';

class Docente extends User {
  constructor(
    nome: string,
    email: string,
    nascimento: Date,
    role = 'docente',
    ativo = true
  ) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovaEstudante(estudante: string, curso: string) {
    return `estudante ${estudante} passou no curso ${curso}.`;
  }
}

const novoDocente = new Docente('Mariana', 'm@m.com', new Date('2021-01-01'));
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'));

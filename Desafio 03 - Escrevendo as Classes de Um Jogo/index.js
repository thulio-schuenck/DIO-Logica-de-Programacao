//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Tipo: ${this.tipo}`);
  }

  atacar() {
    let ataque;

    // Definindo o tipo de ataque com base no tipo do herói
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "desconhecido";
    }

    // Exibindo a mensagem
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando uma instância da classe Heroi
const heroi1 = new Heroi("Aragorn", 30, "guerreiro");
const heroi2 = new Heroi("Gandalf", 1000, "mago");
const heroi3 = new Heroi("Harry", 11, "monge");

// Exibindo as informações dos heróis
//heroi1.exibirInfo();
//heroi2.exibirInfo();

heroi3.atacar();

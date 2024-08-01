type IMessage = {
  content: string;
  author?: string;
};

export const messages: IMessage[] = [
  {
    content:
      "Nunca deixe ninguém te dizer que não pode fazer alguma coisa. Se você tem um sonho tem que correr atrás dele. As pessoas não conseguem vencer e dizem que você também não vai vencer. Se você quer uma coisa corre atrás",

    author: "À Procura da Felicidade",
  },

  {
    content: "Não espere por uma crise para descobrir o que é importante em sua vida",
    author: "Platão",
  },

  {
    content: "Acredite em si e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
    author: "Cynthia Kersey",
  },

  {
    content: "Vencer na vida não é apenas cruzar a linha de chegada, é aproveitar cada passo antes disso",
    author: "",
  },

  {
    content: "A teimosia transforma as grandes barreiras em pequenos obstáculos e constrói os grandes vencedores",
    author: "",
  },

  {
    content: "Não desista com medo de perder pois é pior se arrepender de não ter lutado",
  },

  {
    content: "Nenhum obstáculo será tão grande se sua vontade de vencer for maior",
  },

  {
    content:
      "Na vida, enfrentamos muitos obstáculos. Nós usamos o amor que temos uns pelos outros para ultrapassar esses obstáculos",
    author: "Romance Is A Bonus Book",
  },

  {
    content: "O passado só define o seu futuro se você permitir",
  },

  {
    content: "A persistência é o caminho do êxito",
  },

  {
    content: "Não se preocupe com o que os outros pensam. Apenas seja você mesmo",
  },

  {
    content: "A maior jornada de vida começa dentro de você",
  },

  {
    content: "Seja a versão da qual você vai se orgulhar no futuro",
  },

  {
    content: "Não espere por circunstâncias ideais. Comece agora a criá-las",
  },

  {
    content: "A vida é curta demais para se preocupar com coisas insignificantes ou com pessoas que não te acrescentam",
  },

  {
    content: "O maior erro é continuar cometendo os mesmos erros",
  },

  {
    content: "Pequenos gestos podem ter grandes impactos",
  },

  {
    content: "A felicidade não é uma meta, mas uma bela jornada",
  },

  {
    content: "Quando você muda a maneira como vê as coisas, as coisas que você vê mudam",
  },

  {
    content: "Podemos não ganhar todas as batalhas, mas devemos dar sempre o nosso máximo",
    author: "Homem-Aranha",
  },

  {
    content: "Às vezes a vida é um saco, mas sempre vale a pena viver!",
    author: "Homem-Aranha",
  },

  {
    content: "Se quer a verdade... venha atrás dela",
    author: "Homem-Aranha",
  },

  {
    content: "Uma coisa eu sei com certeza: não faça como eu. Faça como você",
    author: "Homem-Aranha",
  },

  {
    content: "Saber encontrar a alegria na alegria dos outros é o segredo da felicidade",
    author: "Georges Bernanos",
  },
];

export const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

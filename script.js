const perguntas = [
  {
    pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
    respostas: [
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o maior rio do mundo em volume de água?",
    respostas: [
      "Rio Amazonas",
      "Rio Nilo",
      "Rio Mississipi"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o autor da obra 'Grande Sertão: Veredas'?",
    respostas: [
      "Machado de Assis",
      "Clarice Lispector",
      "João Guimarães Rosa"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o processo natural que permite que plantas façam seu próprio alimento?",
    respostas: [
      "Fotossíntese",
      "Respiração",
      "Transpiração"
    ],
    correta: 0
  },
  {
    pergunta: "Em que ano ocorreu a Independência do Brasil?",
    respostas: [
      "1822",
      "1500",
      "1889"
    ],
    correta: 0
  },
  {
    pergunta: "Quem pintou a obra 'Mona Lisa'?",
    respostas: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a capital da Austrália?",
    respostas: [
      "Melbourne",
      "Sydney",
      "Camberra"
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o autor da peça de teatro 'Romeu e Julieta'?",
    respostas: [
      "William Shakespeare",
      "Anton Chekhov",
      "Henrik Ibsen"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o maior oceano do mundo?",
    respostas: [
      "Oceano Atlântico",
      "Oceano Índico",
      "Oceano Pacífico"
    ],
    correta: 2
  },
  {
    pergunta: "Quantos países existem na União Europeia?",
    respostas: [
      "25",
      "28",
      "30"
    ],
    correta: 1
  }
];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' +  totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange =(event) => {
      const estaCorreta =  event.target.value == item.correta
      corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)   
            // loop ou laço de repetição para as respostas
      }
      quizItem.querySelector('dl dt').remove() // remove a um elemento
  
     quiz.appendChild(quizItem)
    }
  
  
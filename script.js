// let nota1 = Number(prompt ("Entre com a primeira nota do aluno"));
// let nota2 = Number(prompt ("Entre com a segunda nota do aluno"));
// let nota3 = Number(prompt ("Entre com a terceira nota do aluno"));

// let media; 

// media = (nota1 + nota2 + nota3)/3;

// console.log(media)

// if (media>=7) {
//     alert(`Você foi aprovado com a nota ${media}`)
// }
// else if (media <7 && media >=6){ 
//     alert(`Você foi para recuperação com a nota ${media}.`)

// }
// else {
//     alert (`Você foi reprovado com a nota ${media}`)
// }

let idade = (prompt ('Quantos anos você tem?'))

let filmes = ["Kung Fu Panda", "A maldição da Casa Assombrada", "Duro de matar", "Tamasha", "High School Musical"
]

// if (idade >=18) {
//     alert( `Você pode assistir aos filmes ${filmes}.`)
// }

// if (idade <18 && idade >=16) {
//   alert(`Você pode assitir todos os filmes, exceto ${filmes [(2)]}.`)
  
//   }

// if (idade <16 && idade >=14) {
//     alert(`Você pode assistir aos filmes ${filmes[(0)]} ${filmes[(3)]} e ${filmes[(4)]}.`)
// }

//  if (idade <14) {
//     alert (`Você só pode assistir aos filmes ${filmes[(0)]} e ${filmes[(4)]}.`)
//  }

//  else {
//     alert (`Você só pode assistir aos filmes ${filmes[(0)]} e ${filmes[(4)]}.`)
//  }


for (let item in filmes) {
    if ( idade >=18) {
        console.log(`Você pode assistir aos filmes:${filmes}`)
        // Podia usar com alert também, mas a implementação do que eu fiz foi péssima, acabou dando muito parecido. //
    }
}

// function fazerSuco(fruta1, fruta2) {
//     return fruta1 + fruta2
// }

// const copo = fazerSuco('banana ', 'maçã')

// console.log(copo)

// sayMyName()

// function sayMyName() {
//     console.log('joao')
// }

// const sayMyName2 = () => {
//     console.log('arrow function')
// }

// sayMyName2()

// function Person(name) {
//     this.name = name 
//     this.walk = function() {
//         return this.name + 'está andando'
//     }
// } 

// const joao = new Person("joao")
// const andressa = new Person("andressa")
// console.log(joao.walk())
// console.log(andressa.walk())

// let number = 964564
// let pessoa = 'joao'

// console.log("tetse", String(number) + pessoa)

// let name = 'jhon'
// const age = 2365.5151651

// console.log(name.length, String(age).length)

// console.log(age.toFixed(3).replace('.', ','))

// let phases = "Quero fazer um teste de texto Aqui!";
// let phasesMin = phases.toLocaleLowerCase();
// console.log(phasesMin.includes("quero"))

// let myphases = phasesMin.split(' ')
// console.log(myphases)

// let joinPhases = myphases.join('_')
// console.log(joinPhases)

// let myArray = "testeee"
// console.log(Array.myArra)

// let array = ["joao", "andressa", "sthefani", "jaime"]

// console.log(array)

// array.push("natalya")

// console.log(array)

// array.unshift("mãe")

// console.log(array)

// console.log(array.slice('eghgjre', 3,5))

// array.pop()

// function removeDadeArray() {
//     while(array.length > 0) {
//                      array.pop()
//         console.log("o que isso faz", removeDade)
//     }
// } 

// removeDadeArray();

// console.log(array)

// let name = new String("joao");
// let age = new Number(25);
// let ageNormal = 23
// let nameNormal = "fe"

// console.log(name, age, ageNormal, nameNormal)

// let age = 24
// let idade = 5

// switch (age) {
//     case ('agea'):
//         console.log('24 certo');
//         break
//     case (idade):
//         console.log('5 certo')
//         break
//     default:
//         console.log('default')
//         break
// }


// function caculadora(operador, number1, number2) {
//     let funcao = 0;

//     switch (operador) {
//         case '+':
//             funcao = number1 + number2;
//             console.log('1')
//             break
//         case '-':
//             funcao = number1 - number2;
//             console.log('2')
//             break
//         case '*':
//             funcao = number1 * number2;
//             console.log('3')
//             break
//         case '/':
//             funcao = number1 / number2;
//             console.log('4')
//             break
//         default:
//             break
//     }


//     return funcao
// }

// console.log(caculadora('/', 5, 2))



// function teste(name = '') {
//     if (name === '') {
//         throw new Error('precisa de nome')
//     }

//     console.log('depois do erro no bloco de codigo')
// }

// try {
//     teste('')

// } catch(e){
//     console.log(e) 
// }

// console.log(teste(""))

// for(let i = 0; i <= 10; i++) {
//    if(i === 5) {
//     continue
//    }
//    console.log(i)
// }

// for(let i = 10; i > 0; i--) {
//     if(i ===5){
//         break
//     }
//     console.log(i)
// }

// let i = 10

// while (i > 0) {
//     console.log(i)  

//     i--
// }

let name = 'joao'
let names = ['joao', 'andressa', 'carlos']

for(let pegar of names) {
    console.log('teste', pegar)
    for(let nameArray of pegar){
        console.log(nameArray)
    }
}
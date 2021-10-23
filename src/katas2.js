// comece a criar a sua função add na linha abaixo

// Soma (1 ponto)
// Escreva uma função chamada "add" que pega dois argumentos e retorna a soma deles.

// Você pode usar operadores incorporados para finalizar a definição.

// Por exemplo, chamar add(2, 4) deve retornar um resultado 6.

function add(valorA, valorB = 0){

    let result = valorA + valorB

    return result

}

// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

// Multiplicação (2 ponto)
// Escreva uma função chamada "multiply" que pega dois argumentos e retorna o seu produto.

// Em vez de usar operadores mátematicos ou funções aritimeticas incorporadas, você precisará de um loop for que chama a função 
// "add" criada anteriormente.

// Por exemplo, chamar multiply(6, 8) deve retornar um resultado 48.

// add faz a soma de A e B
// multiply precisa que some A quantidade vezes de B

function multiply(valorA, valorB=0){

    let resultado = 0;

    for(let contador = 1; contador <= valorB; contador++){

        resultado += add(valorA)

    }return resultado;

}

// console.log(multiply(4,4))
// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

// Potência (2 pontos)
// Escreva uma função chamada "power" que pega dois argumentos (x e n) e retorna o resultado de x elevado à potência n.

// Em vez de usar operadores mátematicos ou funções aritimeticas incorporadas, use outras funções que você escreveu em katas anteriores.

// Outra palavra usada para potência é "exponenciação". Por exemplo, se nós chamarmos power(2, 8), 
// retornaremos 256 ao multiplicar 2 por ele mesmo 8 vezes.

function power(valorA, valorB){

    let resultado = 1;

    for(contador = 1; contador <= valorB; contador++){

        resultado *= add(valorA)
        
    }return resultado
}

// console.log(power(2,8))
// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não  está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

// Fatorial (2 pontos)
// Escreva uma função chamada "factorial" que pega um único argumento e retorna o fatorial dele.

// Em vez de usar operadores mátematicos ou funções aritimeticas incorporadas, use outras funções que você escreveu em katas anteriores.

// Por exemplo, chamar factorial(4) deve retornar um resultado 24.

function factorial(valorA){

    let resultado = valorA;

    for(contador = 0; contador <= valorA; contador++){

        resultado += add(valorA) 
        
    }return resultado
}
// console.log(factorial(4))


// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');

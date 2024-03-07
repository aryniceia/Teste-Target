{/*Questão 3

    Descubra a lógica e complete o próximo elemento:

    a) 1, 3, 5, 7, ...
    A sequência aumenta de 2 em 2 números, então o próximo é 9.

    b) 2, 4, 8, 16, 32, 64, ...
    Cada número seguinte é multiplicado por 2, então o próximo 
    número é 64*2 = 128.

    c) 0, 1, 4, 9, 16, 25, 36, ...
    Está sendo formado por quadrados de números naturais em 
    sequência, o próximo seria 49.

    d) 4, 16, 36, 64,...
    Está sendo formado por quadrados de números pares,
    então o próximo é 100.
    e) 1, 1, 2, 3, 5, 8, ...
    Sequência Fibonacci, o próximo termo é a soma
    dos demais, portanto 13.
    f) 2, 10, 12, 16, 17, 18, 19, ... 

*/}

// Sequência a
function completeSequenceA() {
    sequenceA = [1, 3, 5, 7];
    nextElement = sequenceA[sequenceA.length - 1] + 2;
    return nextElement;
}
// Sequência b
function completeSequenceB() {
    sequenceB = [2, 4, 8, 16, 32, 64];
    nextElement = sequenceB[sequenceB.length - 1] * 2;
    return nextElement;
}
// Sequência c
function completeSequenceC() {
    sequenceC = [0, 1, 4, 9, 16, 25, 36];
    nextElement = Math.pow(sequenceC.length, 2);
    return nextElement;
}
// Sequência d
function completeSequenceD() {
    sequenceD = [4, 16, 36, 64];
    nextElement = Math.pow(sequenceD.length * 2, 2);
    return nextElement;
}
// Sequência e
function completeSequenceE() {
    sequenceE = [1, 1, 2, 3, 5, 8];
    nextElement = sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2];
    return nextElement;
}
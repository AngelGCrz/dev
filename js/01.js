/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

// Operadores

// Operadores Aritméticos
let a = 10;
let b = 5;

console.log("Aritméticos:");
console.log(a + b);  // Suma
console.log(a - b);  // Resta
console.log(a * b);  // Multiplicación
console.log(a / b);  // División
console.log(a % b);  // Módulo
console.log(a ** b); // Exponenciación

// Operadores de Asignación
console.log("Asignación:");
let c = 10;
c += 5; 
console.log(c); // c = c + 5

c -= 3; 
console.log(c); // c = c - 3

c *= 2; 
console.log(c); // c = c * 2

c /= 4; 
console.log(c); // c = c / 4

c %= 3; 
console.log(c); // c = c % 3

// Operadores de Comparación
console.log("Comparación:");
console.log(a == b);  // Igual
console.log(a != b);  // Diferente
console.log(a > b);   // Mayor que
console.log(a < b);   // Menor que
console.log(a >= b);  // Mayor o igual que
console.log(a <= b);  // Menor o igual que

// Operadores Lógicos
console.log("Lógicos:");
let x = true;
let y = false;
console.log(x && y); // AND
console.log(x || y); // OR
console.log(!x);     // NOT

// Operadores de Identidad
console.log("Identidad:");
console.log(a === b); // Estrictamente igual
console.log(a !== b); // Estrictamente diferente

// Operadores de Pertenencia (in y instanceof)
console.log("Pertenencia:");
let obj = { name: "John", age: 30 };
console.log("name" in obj); // true
console.log("address" in obj); // false

function Person(name) {
  this.name = name;
}
let person = new Person("Alice");
console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

// Operadores de Bits
console.log("Bits:");
let d = 5;  // 0101
let e = 3;  // 0011
console.log(d & e);  // AND
console.log(d | e);  // OR
console.log(d ^ e);  // XOR
console.log(~d);     // NOT
console.log(d << 1); // Left Shift
console.log(d >> 1); // Right Shift

// Estructuras de Control

// Condicionales
console.log("Condicionales:");
if (a > b) {
  console.log("a es mayor que b");
} else {
  console.log("a no es mayor que b");
}

switch (a) {
  case 10:
    console.log("a es 10");
    break;
  default:
    console.log("a no es 10");
}

// Iterativas
console.log("Iterativas:");
for (let i = 0; i < 5; i++) {
  console.log("for loop:", i);
}

let j = 0;
while (j < 5) {
  console.log("while loop:", j);
  j++;
}

let k = 0;
do {
  console.log("do-while loop:", k);
  k++;
} while (k < 5);

// Excepciones
console.log("Excepciones:");
try {
  throw new Error("Algo salió mal");
} catch (error) {
  console.log("Capturamos un error:", error.message);
} finally {
  console.log("Este bloque siempre se ejecuta");
}

// Dificultad Extra: Números entre 10 y 55, pares, y que no sean 16 ni múltiplos de 3
console.log("Números entre 10 y 55, pares, y que no son ni el 16 ni múltiplos de 3:");
for (let num = 10; num <= 55; num++) {
  if (num % 2 === 0 && num !== 16 && num % 3 !== 0) {
    console.log(num);
  }
}

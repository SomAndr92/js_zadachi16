

//Задача №1
zadacha(1);
let z1 = [5, 4, 8, 16, 10, 1, 12];
let sum1 = 0;
for (let i = 0; i < z1.length; i++) {
    sum1 += z1[i] ** 2;
}
console.log(sum1);






//Задача №2
zadacha(2);
let z2 = [9, 25, 4, 8, 16, 10, 1];
let sum2 = 0;
for (let i = 0; i < z2.length; i++) {
    sum2 += Math.sqrt(z2[i]);
}
console.log(sum2);

//Задача №3
zadacha(3);
let z3 = [5, -4, 8, 16, -10, 1, 12];
let sum3 = 0;
for (let i = 0; i < z3.length; i++) {
    if (z3[i] > 0) {
        sum3 += z3[i];
    }
}
console.log(sum3);

//Задача №4
zadacha(4);
let z4 = [5, -4, 8, 16, -10, 1, 12];
let sum4 = 0;
for (let i = 0; i < z4.length; i++) {
    if (z4[i] > 0 && z4[i] < 10) {
        sum4 += z4[i];
    }
}
console.log(sum4);


function zadacha(a) {
    alert(("Решение задачи №" + a));
    console.log("Задача №" + a);
}
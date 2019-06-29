// 배열 해체 할당
var a, b, rest, c;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, c = 30] = [10, 20]; // default parameter
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

//Aula de Concat
const nums1 = [1,2,3];
const nums2 = [4,5,6];

const num3 = nums1.concat(nums2,['Luiz','Joelma'], [7,8,9]);

//com rest operator / array spread
//quando usa o rest(...) os indices do array são colocados quando não coloca rest o array inteiro é colocado
const num4 = [...nums1, "Luiz" , ...nums2, ...[8,9,10]];
console.log(num4);

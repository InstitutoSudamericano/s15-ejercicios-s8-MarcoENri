// 6. Mostrar la suma de los elementos que no sean múltiplos de 7
function MultiplosSiete(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 7 !== 0) {
        suma += nums[i];
      }
    }
    return suma;
  }
  
  console.log(MultiplosSiete([12, 14, 5, 7])); // 19

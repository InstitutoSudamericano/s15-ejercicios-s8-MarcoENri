// 1. Mostrar la suma de los elementos impares
function ElementosImpares(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 !== 0) {
        suma += nums[i];
      }
    }
    return suma;
  }
  
  console.log(ElementosImpares([10, 50, 8, 4])); // 0
  console.log(ElementosImpares([3, 5, 8, 4])); // 8

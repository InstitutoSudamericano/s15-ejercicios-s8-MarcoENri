 // 5. Mostrar la suma de los elementos múltiplos de 3
 function MultiplosTres(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 3 === 0) {
        suma += nums[i];
      }
    }
    return suma;
  }
  
  console.log(MultiplosTres([12, 3, 5, 7])); // 15

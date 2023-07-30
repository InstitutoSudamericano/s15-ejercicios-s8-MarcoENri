// 2. Mostrar la suma donde los índices sean pares
function ElementosPares(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
        suma += nums[i];
      }
    }
    return suma;
  }
  
  console.log(ElementosPares([10, 50, 8, 4])); // 18

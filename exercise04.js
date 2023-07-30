// 4. Mostrar la suma de los índices donde el elemento es 0
function ElementoCero(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        suma += i;
      }
    }
    return suma;
  }
  
  console.log(ElementoCero([1, 1, 0, 0])); // 5

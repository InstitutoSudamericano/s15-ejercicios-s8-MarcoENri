// 9. Mostrar la suma de los índices donde el índice sea menor al elemento
function Elementomenor(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i < nums[i]) {
        suma += i;
      }
    }
    return suma;
  }
  
  console.log(Elementomenor([0, 2, 1, 4])); // 6

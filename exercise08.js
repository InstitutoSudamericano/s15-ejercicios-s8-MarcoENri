
// 8. Mostrar la suma de los elementos donde el índice sea mayor al elemento
function Elementomayor(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i > nums[i]) {
        suma += nums[i];
      }
    }
    return suma;
  }
  
  console.log(Elementomayor([0, 2, 1, 1])); // 2
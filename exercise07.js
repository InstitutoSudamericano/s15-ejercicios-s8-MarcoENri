// 7. Mostrar la suma de los elementos donde el índice sea igual al elemento
function Elementoigual(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === i) {
        suma += nums[i];
      }
    }
    return suma;
  }
  
  console.log(Elementoigual([2, 1, 4, 3])); // 4

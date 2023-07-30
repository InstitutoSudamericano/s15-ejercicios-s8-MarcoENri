// 3. Mostrar la suma de los elementos mayores a 10
function ElementosMayoresDiez(nums) {
    let suma = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 10) {
        suma += nums[i];
      }
    }
    return suma;
  }
  
  console.log(ElementosMayoresDiez([10, 50, 8, 4])); // 50

//car
let carArr = [];

class Car {
  constructor(
    nome,
    preco,
    alturaCacamba,
    alturaVeiculo,
    alturaSolo,
    capacidadeCarga,
    motor,
    potencia,
    volumeCacamba,
    roda,
    image
  ) {
    this.name = nome;
    this.price = preco;
    this.cartHeight = alturaCacamba;
    this.vehicleHeight = alturaVeiculo;
    this.groundHeight = alturaSolo;
    this.loadCapacity = capacidadeCarga;
    this.engine = motor;
    this.power = potencia;
    this.bucketVolume = volumeCacamba;
    this.wheel = roda;
    this.image = image;
  }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === carClass.name) return i;
  }
  return -1;
}

function SetCarToCompare(el, carClass) {
  if (carClass instanceof Car) {
    if (el.checked) {
      // Adiciona carro se não existir no array e limitar a 2 carros
      if (carArr.length < 2) {
        carArr.push(carClass);
      } else {
        el.checked = false;
        alert('Você só pode comparar 2 carros por vez');
      }
    } else {
      // Remove carro do array
      const index = carArr.findIndex(car => car.name === carClass.name);
      if (index !== -1) {
        carArr.splice(index, 1);
      }
    }
  } else {
    throw 'You need set a Car Class';
  }
}

function UpdateCompareTable() {
  // Atualiza as imagens
  for (let i = 0; i < carArr.length; i++) {
    document.getElementById(`compare_image_${i}`).innerHTML = 
      `<img src="${carArr[i].image}" style="width: 200px">`;
    
    // Atualiza os dados do carro
    document.getElementById(`compare_modelo_${i}`).textContent = carArr[i].name;
    document.getElementById(`compare_alturacacamba_${i}`).textContent = carArr[i].cartHeight;
    document.getElementById(`compare_alturaveiculo_${i}`).textContent = carArr[i].vehicleHeight;
    document.getElementById(`compare_alturasolo_${i}`).textContent = carArr[i].groundHeight;
    document.getElementById(`compare_capacidadecarga_${i}`).textContent = carArr[i].loadCapacity;
    document.getElementById(`compare_motor_${i}`).textContent = carArr[i].engine;
    document.getElementById(`compare_potencia_${i}`).textContent = carArr[i].power;
    document.getElementById(`compare_volumecacamba_${i}`).textContent = carArr[i].bucketVolume;
    document.getElementById(`compare_roda_${i}`).textContent = carArr[i].wheel;
    document.getElementById(`compare_preco_${i}`).textContent = 
      `R$ ${carArr[i].price.toLocaleString('pt-BR')}`;
  }

  // Limpa as células vazias se houver apenas 1 carro selecionado
  if (carArr.length < 2) {
    const emptyIndex = carArr.length;
    document.getElementById(`compare_image_${emptyIndex}`).innerHTML = '';
    document.getElementById(`compare_modelo_${emptyIndex}`).textContent = '';
    document.getElementById(`compare_alturacacamba_${emptyIndex}`).textContent = '';
    document.getElementById(`compare_alturaveiculo_${emptyIndex}`).textContent = '';
    document.getElementById(`compare_alturasolo_${emptyIndex}`).textContent = '';
    document.getElementById(`compare_capacidadecarga_${emptyIndex}`).textContent = '';
    document.getElementById(`compare_motor_${emptyIndex}`).textContent = '';
    document.getElementById(`compare_potencia_${emptyIndex}`).textContent = '';
    document.getElementById(`compare_volumecacamba_${emptyIndex}`).textContent = '';
    document.getElementById(`compare_roda_${emptyIndex}`).textContent = '';
    document.getElementById(`compare_preco_${emptyIndex}`).textContent = '';
  }
}

function ShowCompare() {
  if (carArr.length < 2) {
    alert('Precisa marcar 2 carros para apresentar a comparação');
    return;
  }

  UpdateCompareTable();
  document.getElementById('compare').style.display = 'block';
}

function HideCompare() {
  document.getElementById('compare').style.display = 'none';
}

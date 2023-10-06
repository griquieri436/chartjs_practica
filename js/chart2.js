function pie(){
  fetch('./json/data2.json')
  .then(response => response.json())
  .then(data2 => {
    console.log(data2);


    var options = {
      // Opciones de configuración (puedes ajustar según tus necesidades)
    };
  
    var ctx2 = document.getElementById('piechart').getContext('2d');
    var miGrafico = new Chart(ctx2, {
      type: 'pie', // Tipo de gráfico de pastel
      data: data2,
      options: options
    });
  })
};

document.addEventListener('DOMContentLoaded', pie())

  
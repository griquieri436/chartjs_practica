var datos = {
    labels: ['Alimentación', 'Transporte', 'Vivienda', 'Entretenimiento', 'Salud', 'Educación', 'Otros'],
    datasets: [{
      data: [30, 15, 25, 10, 8, 7, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(107, 142, 35, 0.8)'
      ]
    }]
  };

  var options = {
    // Opciones de configuración (puedes ajustar según tus necesidades)
  };

  var ctx2 = document.getElementById('piechart').getContext('2d');
  var miGrafico = new Chart(ctx2, {
    type: 'pie', // Tipo de gráfico de pastel
    data: datos,
    options: options
  });
// var data = {
//     // se muestran las referencias a comparar
//     labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//     datasets: [{
//         label: '# de ganancias', //se muestran los datos a incertar en la tabla
//         data: [52000, 23000, 8010, 4440, 8050, 6450, 58203, 89131, 20042, 11500, 20000, 30000],
//         borderWidth: 1
//     }],
//     datalabels: {
//         anchor: 'end', // La posición de la etiqueta en relación con la barra
//         align: 'end',  // La alineación de la etiqueta en relación con la barra
//         color: 'black', // Color del texto de la etiqueta
//         formatter: function (value, context) {
//             return value; // Esta función determina qué valor mostrar en la etiqueta
//         }
//     }
// };


// const ctx1 = document.getElementById('barchart');

// const barchart = new Chart(ctx1, {
//     type: 'bar',
//     data: data,
//     Options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         },
//         plugins: {
//             datalabels: {
//                 anchor: 'end',
//                 align: 'end',
//                 color: 'red',
//                 formatter: function (value, context) {
//                     return value;
//                 }
//             }
//         }
//     }
// }

// )

document.addEventListener('DOMContentLoaded', function () {
    // Cargar los datos desde data.json- los toma desde el html
    fetch('./json/data1.json')
        .then(response => response.json())
        .then(data => {
            console.log (data);
            // Modificar los datos según tus necesidades
            // data.labels = ['NuevoEnero', 'NuevoFebrero', 'NuevoMarzo', 'NuevoAbril', 'NuevoMayo', 'NuevoJunio', 'NuevoJulio', 'NuevoAgosto', 'NuevoSeptiembre', 'NuevoOctubre', 'NuevoNoviembre', 'NuevoDiciembre'];

            // Crear el gráfico con los datos modificados
            const ctx1 = document.getElementById('barchart');

            const barchart = new Chart(ctx1, {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            color: 'red',
                            formatter: function (value, context) {
                                return value;
                            }
                        }
                    }
                }
            });
        })

        //captura el error si es que existe algúno 
        .catch(error => console.error('Error al cargar los datos:', error));
});
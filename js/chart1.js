function barras() {
    // Cargar los datos desde data.json- los toma desde el html
    fetch('./json/data1.json')
        .then(response => response.json())
        .then(data1 => {
            console.log (data1);
            // Modificar los datos según tus necesidades
            // data.labels = ['NuevoEnero', 'NuevoFebrero', 'NuevoMarzo', 'NuevoAbril', 'NuevoMayo', 'NuevoJunio', 'NuevoJulio', 'NuevoAgosto', 'NuevoSeptiembre', 'NuevoOctubre', 'NuevoNoviembre', 'NuevoDiciembre'];

            // Crear el gráfico con los datos modificados
            const ctx1 = document.getElementById('barchart');

            const barchart = new Chart(ctx1, {
                type: 'bar',
                data: data1,
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
};

 document.addEventListener('DOMContentLoaded', barras ());
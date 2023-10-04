function gerarGrafico() {
    const formData = document.getElementById('formData');
    const inputs = formData.getElementsByTagName('input');

    const labels = [];
    const data = [];

    for (let i = 0; i < inputs.length; i++) {
        labels.push(inputs[i].previousElementSibling.textContent);
        data.push(parseFloat(inputs[i].value) || 0);
    }

    const ctx = document.getElementById('polarChart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: labels,
            datasets: [{
                label: 'Dados do gráfico',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 205, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(54, 162, 235)',
                    'rgba(153, 102, 255)',
                    'rgba(201, 203, 207)',
                    'rgba(255, 99, 132)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 205, 86)'
                ],
            }]
        },
        options: {
            scales: {
                r: {
                    pointLabels: {
                        beginAtZero: true,
                        centerPointLabels: true,

                        min: 0,
                        max: 10,
                        stepSize: 1,
                        display: true,
                        font: {
                            size: 18
                        },

                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Roda da Vida',
                    font: {
                        size: 25
                    },
                },

            }
        }
    });
}

document.getElementById('formData').addEventListener('submit', function (e) {
    e.preventDefault();
    gerarGrafico();
});
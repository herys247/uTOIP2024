$(function () {

	/* Circle-progress */
	$('#circle').circleProgress({
		value: 0.85,
		size: 70,
		fill: {
		  color: ["#6ab2f5"]
		}
    });
	/* Circle-progress closed */

	/* Circle-progress-1 */
	$('#circle-1').circleProgress({
		value: 0.64,
		size: 70,
		fill: {
		 color: ["#fd4967"]
		}
	});
	/* Circle-progress-1 closed */

	/* Circle-progress-2 */
	$('#circle-2').circleProgress({
		value: 0.74,
		size: 70,
		fill: {
		  color: ["#556ee7 "]
		}
    });
    /* Circle-progress-2 closed */

	/* Circle-progress-3 */
	$('#circle-3').circleProgress({
		value: 0.55,
		size: 70,
		fill: {
		  gradient: ["#f5334f"]
		}
    });
	/* Circle-progress-3 closed */

	/* Chartjs (#areaChart1) */
    var ctx = document.getElementById('areaChart1').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [{
                label: 'Market value',
                data: [30, 70, 30, 100, 50, 130, 100, 140],
                backgroundColor: 'transparent',
                borderColor: '#1170e4',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#1170e4',
                pointBorderColor: '#1170e4',
                pointHoverBorderColor: '#1170e4',
                pointBorderWidth: 2,
                pointRadius: 2,
                pointHoverRadius: 2,
                borderWidth: 4,
                lineTension: 0.3,
            },]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                tooltip: {
                    mode: 'index',
                    backgroundColor: '#fff',
                    titleColor: '#000',
                    bodyColor: '#000',
                    cornerRadius: 3,
                    intersect: false,
                }
            },
            responsive: true,
            scales: {
                x: {
                    display: false,
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        display: false,
                        fontColor: 'transparent'
                    }
                },
                y: {
                    display: false,
                    ticks: {
                        display: false,
                    }
                }
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });
    /* Chartjs (#areaChart1) closed */

	/* Chartjs (#areaChart2) */
    var ctx = document.getElementById('areaChart2').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [{
                label: 'Market value',
                data: [24, 18, 28, 21, 32, 28, 30],
                backgroundColor: 'transparent',
                borderColor: '#09ad95',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#09ad95',
                pointBorderColor: '#09ad95',
                pointHoverBorderColor: '#09ad95',
                pointBorderWidth: 2,
                pointRadius: 2,
                pointHoverRadius: 2,
                borderWidth: 4,
                lineTension: 0.3,
            },]
        },
        options: {

            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                tooltip: {
                    mode: 'index',
                    backgroundColor: '#fff',
                    titleColor: '#000',
                    bodyColor: '#000',
                    cornerRadius: 3,
                    intersect: false,
                }
            },
            responsive: true,
            scales: {
                x: {
                    display: false,
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                },
                y: {
                    display: false,
                    ticks: {
                        display: false,
                    }
                }
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });
    /* Chartjs (#areaChart2) closed */

	/* Chartjs (#areaChart3) */
    var ctx = document.getElementById('areaChart3').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [{
                label: 'Market value',
                data: [30, 70, 30, 100, 50, 130, 100, 140],
                backgroundColor: 'transparent',
                borderColor: '#f7b731',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#f7b731',
                pointBorderColor: '#f7b731',
                pointHoverBorderColor: '#f7b731',
                pointBorderWidth: 2,
                pointRadius: 2,
                pointHoverRadius: 2,
                borderWidth: 4,
                lineTension: 0.3,
            },]
        },
        options: {

            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                tooltip: {
                    mode: 'index',
                    backgroundColor: '#fff',
                    titleColor: '#000',
                    bodyColor: '#000',
                    cornerRadius: 3,
                    intersect: false,
                }
            },
            responsive: true,
            scales: {
                x: {
                    display: false,
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                },
                y: {
                    display: false,
                    ticks: {
                        display: false,
                    }
                }
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });
    /* Chartjs (#areaChart3) closed */

	/* Chartjs (#areaChart4) */
    var ctx = document.getElementById('areaChart4').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            type: 'line',
            datasets: [{
                label: 'Market value',
                data: [24, 18, 28, 21, 32, 28, 30],
                backgroundColor: 'transparent',
                borderColor: '#e82646',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#e82646',
                pointBorderColor: '#e82646',
                pointHoverBorderColor: '#e82646',
                pointBorderWidth: 2,
                pointRadius: 2,
                pointHoverRadius: 2,
                borderWidth: 4,
                lineTension: 0.3,
            },]
        },
        options: {

            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        display: false
                    }
                },
                tooltip: {
                    mode: 'index',
                    backgroundColor: '#fff',
                    titleColor: '#000',
                    bodyColor: '#000',
                    cornerRadius: 3,
                    intersect: false,
                }
            },
            responsive: true,
            scales: {
                x: {
                    display: false,
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                },
                y: {
                    display: false,
                    ticks: {
                        display: false,
                    }
                }
            },
            title: {
                display: false,
            },
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    });
    /* Chartjs (#areaChart4) closed */

});





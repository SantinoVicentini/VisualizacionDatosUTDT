d3.csv('data2000.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'fertility',
        y: 'life_expect',
        r: 'pop',
        fill: 'cluster',
        symbol: "cluster",
        opacity: 0.7,
      }),
    ],
    color: {
      legend: true,
    },
    x: { grid: true, line: true, zero: true, nice: true, },
    y: { grid: true, line: true, zero: true, nice: true, }
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})

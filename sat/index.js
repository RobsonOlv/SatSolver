const sat = require('sat_modelo.js')
const { performance } = require('perf_hooks')

const readline = require('readline')
const arquivo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
arquivo.question("Digite o nome do arquivo:", (fileName) => {
    t0 = performance.now()
    let a = sat.solve(fileName)
    t1 = performance.now()
    console.log("Tempo de execução: " + ((t1 - t0) / 1000).toFixed(5) + "s")
    arquivo.close()
})



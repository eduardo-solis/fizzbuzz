
// Importamos la clase que nos ayuda a leer un archivo
const Reader = require('../../../lib/utils/Reader')

// Importamos la clase ExplorerService
const ExplorerService = require('../../../lib/services/ExplorerService')

describe('Unit Test for ExplorerService class', () => {

    test('Test 1.- Filter the information by Mission', () => {

        // Obtenermos los datos en formato JSON
        const explorers = Reader.readJSONFile('explorers.json')
        //console.log(explorers)

        // Obteniendo una lista filtrada por mision
        const explorersByMission = ExplorerService.filterByMission(explorers, 'node')
        //console.log(explorersByMission)

        expect(explorersByMission).not.toHaveLength(0)

    })

    test('Test 2.- Add validation to filter the information by Mission', () => {

        // Obtenermos los datos en formato JSON
        const explorers = Reader.readJSONFile('explorers.json')
        //console.log(explorers)

        // Obteniendo una lista filtrada por mision
        const explorersByMission = ExplorerService.filterByMission(explorers, 'nodes')

        expect(explorersByMission.error).toMatch(/no existen explorers con esta mision/)

    })

    test('Test 3.- Get the quantity of explorers by Mission', () => {

        // Obtenermos los datos en formato JSON
        const explorers = Reader.readJSONFile('explorers.json')

        // Obtenemos la cantidad de explores
        const quantityOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, 'node')

        // Comparamos
        expect(quantityOfExplorers).not.toBe(0)

    })

})


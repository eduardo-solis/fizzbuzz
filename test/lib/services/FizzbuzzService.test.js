
const Reader = require('../../../lib/utils/Reader')
const ExplorerService = require('../../../lib/services/ExplorerService')

const FizzbuzzService = require('../../../lib/services/FizzbuzzService')

describe('Unit Test for FizzbuzzService class', () => {

    test('Test 1.- Apply validation in explorer \nFirst case: atribute trick = score', () => {

        // Obtenermos los datos en formato JSON
        const explorers = Reader.readJSONFile('explorers.json')

        // Obteniendo una lista filtrada por mision
        const explorersByMission = ExplorerService.filterByMission(explorers, 'node')

        const explorerWithValidation = FizzbuzzService.applyValidationInExplorer(explorersByMission[0])

        expect(explorerWithValidation.trick).toBe(1)

    })

    test('Test 2.- Apply validation in explorer \nSecond case: atribute trick = FIZZ', () => {

        // Obtenermos los datos en formato JSON
        const explorers = Reader.readJSONFile('explorers.json')

        // Obteniendo una lista filtrada por mision
        const explorersByMission = ExplorerService.filterByMission(explorers, 'node')

        const explorerWithValidation = FizzbuzzService.applyValidationInExplorer(explorersByMission[2])

        expect(explorerWithValidation.trick).toBe('FIZZ')

    })

})

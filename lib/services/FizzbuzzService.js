
class FizzbuzzService {

    static applyValidationInExplorer(explorer) {

        if ( explorer.score % 3 === 0 ){
            return 'si es divisible entre 3'
        }
        else {
            explorer.trick = explorer.score
            return explorer
        }

    }

}

module.exports = FizzbuzzService
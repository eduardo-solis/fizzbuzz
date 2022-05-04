
class FizzbuzzService {

    static applyValidationInExplorer(explorer) {

        if ( (explorer.score % 3 === 0) && (explorer.score % 5 === 0)){
            return 'si es divisible entre 3 y 5'
        }
        else {

            if ( explorer.score % 3 === 0 ) {
                explorer.trick = 'FIZZ'
                return explorer
            }
            
            else if ( explorer.score % 5 === 0 ) {
                return 'es divisible entre 5'
            }

            else {
                explorer.trick = explorer.score
                return explorer
            }

        }

    }

}

module.exports = FizzbuzzService
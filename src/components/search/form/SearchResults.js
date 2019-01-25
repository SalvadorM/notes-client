import React, {Component} from 'react'

import ResultView from '../form/resultView'

class SearchResults extends Component{

    render(){
        const results = this.props.results
        let allResults = <h2>No results found</h2>

        if(results.length !== 0){
            allResults = results.map(result => {
                return <ResultView result={result} key={result.id} />
            })
        }

        return(
            <div className="container text-center mt-4">
                {allResults}
            </div>
        )

    }

}

export default SearchResults 
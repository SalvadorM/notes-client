import React, {Component} from 'react'

import Loading from '../../post/form/loading'
import SearchResults from '../form/SearchResults'
import SearchBar from '../form/SearchBar'

class Search extends Component{
    constructor(){
        super()
        this.state = {
            results: [],
        }

        this.newSearch = this.newSearch.bind(this)
    }

     
    newSearch(results){ 
        this.setState({loading: true})
        setTimeout(() => {
            this.setState({
                results: results,
                loading: false
            })
        }, 50 * results.length)
    }

    render(){
        const {results, loading} = this.state
        if(loading){
            return <Loading type="bubbles" color="#000000"/>
        }
        return(<div>
            <SearchBar action={this.newSearch} />
            <SearchResults results={results}/>
            </div>)
    }

}

export default Search
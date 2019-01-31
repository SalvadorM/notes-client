import React, {Component} from 'react'

import Loading from '../../post/form/loading'
import SearchResults from '../form/SearchResults'
import SearchBar from '../form/SearchBar'

class Search extends Component{
    constructor(){
        super()
        this.state = {
            results: [],
            usernames: []
        }

        this.newSearch = this.newSearch.bind(this)
        this.clearState = this.clearState.bind(this)
    }

    clearState(){
        this.setState({
            results: [],
            usernames: []
        })
    }
    newSearch(results, usernames){ 
        this.clearState()

        if(!results){
            this.setState({loading: true})
            setTimeout(() => {
                this.setState({
                    usernames: usernames,
                    loading: false
                })
            }, 50 * usernames.length)

        }else {
            this.setState({loading: true})
            setTimeout(() => {
                this.setState({
                    results: results,
                    loading: false
                })
            }, 50 * results.length)
        }
    }

    render(){
        const {results, loading, usernames} = this.state
        if(loading){
            return <Loading type="bubbles" color="#000000"/>
        }
        return(<div>
            <SearchBar action={this.newSearch} />
            <SearchResults results={results} usernames={usernames}/>
            </div>)
    }

}

export default Search
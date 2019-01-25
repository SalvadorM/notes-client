import React, {Component} from 'react'
import {searchPost} from '../functions'

class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            query: '',
            queryValue: '',
            searchValue: 'title',

        }
    }
    onChangeValue(e){
        let searchValue = e.target.value
        this.setState({searchValue})
    }

    onChange(e){
        let {query, queryValue} = this.state

        query = e.target.value
        queryValue = e.target.value

        this.setState({query, queryValue})
    }

    onSubmit(e){
        e.preventDefault()
        let {query} = this.state
        let path = this.state.searchValue
        let wordSpread = query.split(" ")

        let keywords = {}
 
        wordSpread.filter( word => word !== '').map((val, index) => {
            keywords['key'+index] = val
            return keywords
        })

        searchPost(path, keywords)
            .then(results => {
                this.setState({
                    query: '',
                    searchValue: 'title',
                })
                this.props.action(results.data)
            })
            .catch(err => console.log(err))
 
    }

    render(){
        return(
            <div className="container middle">
                <form onSubmit={(e) => this.onSubmit(e)}>
                <div className="form-row  mt-4">

                    <div className="col-auto">
                        <input className="form-control"
                        type="text"
                        onChange = { (e) => this.onChange(e) }
                        required></input>
                    </div>

                    <div className="col-auto">
                        <select className="custom-select" 
                            value={this.state.searchValue} 
                            onChange = { (e) => this.onChangeValue(e)}>

                        <option value="title">title</option>
                        <option value="body">body</option>
                        </select>
                    </div>

                    <div className="col-auto">
                    <button className="btn btn-info"
                                type="submit">search
                        </button>
                    </div>
                </div>
                </form>
            </div>
        )
    }

}

export default SearchBar
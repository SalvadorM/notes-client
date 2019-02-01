import React, {Component} from 'react'

import ResultView from '../form/resultView'
import UserView from './userForm';

class SearchResults extends Component{

    render(){
        const results = this.props.results
        const usernames = this.props.usernames

        let allResults = <h2>No results found</h2>
        let userResults = <h2>No usernames found</h2>

        if(usernames.length !== 0) {
            userResults = usernames.map(user => {
                return <UserView key={user.id} user={user} />
            })

            return(<div className="container text-center pt-4">{userResults}</div>)
        }
        else if(results.length !== 0){
            allResults = results.map(result => {
                return <ResultView result={result} key={result.id} />
            })
        }

        return(
            <div className="container text-center pt-4">
                {allResults}
            </div>
        )

    }

}

export default SearchResults 
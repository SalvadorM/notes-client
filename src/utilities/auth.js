const { userLogin } = require('../components/user/functions')

module.exports = {

    //@params   email
    //@params   password
    //@params   cb - callback responce 
    //@desc     client aunthentication and localstorage setup 
    authenticate(username, password, cb){
        const user = {
            username: username,
            password: password
        }

        //post request to user/login
        userLogin(user)
            .then(res => {
                if(res.data.name !== 'SequelizeDatabaseError'){
                    //set localstorage info
                    for(let key in res.data){
                        localStorage.setItem(key, res.data[key])
                    }
                    //set rest of info
                    localStorage.setItem('isAuthenticated', 'true')
                    localStorage.setItem('error', 'false')
                    //callback 
                    cb()
                }else {
                    localStorage.setItem('isAuthenticated', 'false')
                    localStorage.setItem('error', 'true')
                    cb()
                }
            })
            .catch(err => {
                localStorage.setItem('isAuthenticated', 'false')
                localStorage.setItem('error', 'true')
                
                cb()
            })
    },

    //@params   cb - callback responce 
    //@desc     client aunthentication and localstorage setup 
    signout(){

        localStorage.clear()
    },

    //@params   item - localStorage key
    //@desc     client aunthentication and localstorage setup 
    getlocalstorage(item){
        return localStorage.getItem(item)
    }
}

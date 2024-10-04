//const { EnterText, Click } = require('../interactions');
import Actions from '../interactions/index'

class Login {
    static async withCredentials(username, password) { 
            return [    
            await Actions.EnterText.into('username', username)  ,
                await Actions.EnterText.into('password', password),
                await Actions.Click.on('loginButton')
            ]
    };
}


//module.exports = { Login };
export default Login;
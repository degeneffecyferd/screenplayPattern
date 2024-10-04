import selectors from '../selectors/login.selectors';

class Message {
    static async displayed() {
        return async () => {
            await $(selectors.message).isDisplayed()
            return await (await $(selectors.message)).getText();
        };
    }
}

//module.exports = { ErrorMessage };
export default Message;
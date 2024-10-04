import selectors from '../selectors/login.selectors';

class EnterText {
    static async into(field, value) {
        return async () => {
            await (await $(selectors[field])).setValue(value);
        };
    }
}

class Click {
    static async on(element) {
        return async () => {
            await (await $(selectors[element])).click();
        };
    }
}

export default {EnterText, Click}
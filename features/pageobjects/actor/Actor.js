class Actor {
    constructor(name) {
        this.name = name;
    }

    async attemptsTo(...tasks) {
        for (let task of tasks.flat()) {
            await task();
        }
    }

    async asks(question) {
        return await question();
    }
}

export default Actor;
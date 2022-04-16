
export default class Identity {
    static KEY = '_identity_'
    static set(obj) {
        localStorage.setItem(this.KEY, JSON.stringify(obj))
    }

    static get() {
        const id = localStorage.getItem(this.KEY)
        if(!id) {
            return null;
        }

        return JSON.parse(id)
    }

    static clear() {
        localStorage.removeItem(this.KEY)
    }
}
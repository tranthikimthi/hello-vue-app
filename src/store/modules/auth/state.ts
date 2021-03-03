export type User = {
    loggedIn: boolean,
    data: any
}

export type State = {
    user: User
}

export const authState: State = {
    user: {
        loggedIn: false,
        data: null
    }
}
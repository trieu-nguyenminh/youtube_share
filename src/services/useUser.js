export const userPrefix = 'USER:';


export const getUser = (username) => {
    try {
        return window.localStorage.getItem(`${userPrefix}${username}`);
    } catch (e) {
        return null;
    }
}

export const addUser = ({username, password}) => {
    window.localStorage.setItem(`${userPrefix}${username}`, password);
}

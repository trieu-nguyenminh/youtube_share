import {addUser, getUser} from "./useUser";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {resetUser, saveUser} from "../redux/user";

export const signIn = ({username, password}) => {
    const _password = getUser(username);
    if(!_password) {
        signUp({username, password});
    }

    return _password === password;
}

export const signUp = ({username, password}) => {
    return addUser({username, password});
}


export const useAuth = () => {
    const dispatch = useDispatch();
    const username = useSelector(store => store?.user?.username);
    return {
        signIn: ({username, password}) => {
            let flag = signIn({username, password});
            if(flag) {
                dispatch(saveUser({username}));
            }

            return flag;
        },
        signOut: () => {
            dispatch(resetUser());
        },
        isLogged: !!username,
        username
    }
}

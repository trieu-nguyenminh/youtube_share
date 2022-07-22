import {ProfileNav} from "./ProfileNav";
import {LoginNav} from "./LoginNav";
import {useAuth} from "../../services/useAuth";

export const ActionNav = () => {
    const {isLogged} = useAuth();


    if(isLogged) {
        return (
            <ProfileNav />
        );
    }
    return (
        <LoginNav />
    );
}

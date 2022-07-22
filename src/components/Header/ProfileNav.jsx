import {useAuth} from "../../services/useAuth";
import {Button} from "primereact/button";
import {useNavigate} from 'react-router-dom';

export const ProfileNav = () => {

    const {username, signOut} = useAuth();
    const navigate = useNavigate();

    return (
        <div className="flex flex-row align-items-center" style={{gap: 16}}>
            <div className="font-bold">Welcome {username}</div>
            <Button type="button" label="Share a movie" onClick={e => navigate('/share')} />
            <Button
                type="button"
                label="Logout"
                className="p-button p-button-outlined"
                onClick={signOut}
            />
        </div>
    );
}

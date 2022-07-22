import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useAuth} from "../../services/useAuth";
import {useRef, useState} from "react";
import {Toast} from "primereact/toast";

export const LoginNav = () => {
    const {signIn} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toastRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        let flag = signIn({username, password});
        if(!flag) {
            /** show error */
            toastRef.current?.show({
                severity: 'error',
                summary: 'Sign in',
                detail: 'Username or password is invalid',
                life: 3000
            });
        }
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-row align-items-center" style={{gap: 12}}>
            <InputText placeholder="Email" onChange={e => setUsername(e.target.value)} />
            <InputText placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
            <Button type="submit" label="Login / Register" />
            <Toast ref={toastRef} />
        </form>
    );
}

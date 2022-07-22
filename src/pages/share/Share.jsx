import {Header} from "../../components/Header";
import {Container} from "../../components/Container";
import {Fieldset} from "primereact/fieldset";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useAuth} from "../../services/useAuth";
import {Message} from "primereact/message";
import {useRef, useState} from "react";
import {useMovies} from "../../services/useMovies";

import {useNavigate} from "react-router-dom";

import _ from 'lodash';
import {Toast} from "primereact/toast";

export const Share = () => {
    const { isLogged, username } = useAuth();
    const [url, setUrl] = useState('');
    const {addMovie} = useMovies();
    const toastRef = useRef();
    const navigate = useNavigate();

    if(!isLogged) {
        return (
            <>
                <Message className="w-full" severity="error" text="You must sign in to access this page" />
            </>
        );
    }

    const getYoutubeId = (url) => {
        let reg = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
        let res = url.match(reg);
        return res? res[2]: null;
    };

    const onSubmit = (e) => {
        e.preventDefault();

        let id = getYoutubeId(url);

        if(!id) {
            return toastRef.current?.show({
                severity: 'error',
                summary: 'Sharing',
                detail: 'Please input a right youtube url',
                life: 3000
            });
        }


        try {
            addMovie({
                url,
                id,
                like: _.random(0, 1000, false),
                dislike: _.random(0, 1000, false),
                title: `title of video ${_.random(0, 1000,false)}`,
                description: `description of video ${_.random(0, 1000,false)}`,
                shareBy: username
            });

            navigate('/');

        } catch (e) {
            toastRef.current?.show({
                severity: 'error',
                summary: 'Sharing',
                detail: e,
                life: 3000
            });
        }

    }

    return (
        <>
            <Header />
            <Container>
                <form className="py-3" onSubmit={onSubmit}>
                    <Fieldset legend="Share a Youtube movie">
                        <div className="field grid">
                            <label htmlFor="firstname4" className="col-12 mb-2 md:col-2 md:mb-0">Youtube URL</label>
                            <div className="col-12 md:col-10">
                                <InputText className="w-full" value={url} onChange={e => setUrl(e.target.value)} />
                            </div>
                        </div>
                        <div className="field grid">
                            <label htmlFor="lastname4" className="col-12 mb-2 md:col-2 md:mb-0">&nbsp;</label>
                            <div className="col-12 md:col-10">
                                <Button type="submit" label="Share" className="w-full" />
                            </div>
                        </div>
                    </Fieldset>
                </form>
            </Container>
            <Toast ref={toastRef} />
        </>
    );
};

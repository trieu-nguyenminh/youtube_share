import _ from 'lodash';
import {MovieCard, Voting} from "./MovieCard";
import {useMovies} from "../../services/useMovies";
import {useVoting} from "../../services/useVoting";
import {useAuth} from "../../services/useAuth";
import {useEffect, useState} from "react";

export const Movies = () => {

    const {items: movies} = useMovies();


    return (
        <div className="py-3 grid">
            {
                _.map(movies, (item, index) => (
                    <div className="col-12" key={index}>
                        <MovieCard
                            key={index}
                            title={item?.title}
                            description={item?.description}
                            youtubeId={item?.id}
                            like={item?.like}
                            dislike={item?.dislike}
                            shareBy={item?.shareBy}
                            voting={<VotingWithUser movieId={item?.id} />}
                        />
                    </div>
                ))
            }
        </div>
    );
}


const VotingWithUser = ({movieId}) => {
    const {getVoting, vote} = useVoting();
    const {username, isLogged} = useAuth();
    const [value, setValue] = useState(-1);

    const votingItem = getVoting(username, movieId);

    useEffect(() => {
        if(votingItem) {
            setValue(votingItem?.value);
        } else {
            setValue(-1);
        }
    }, [votingItem]);


    const votingAction = (value) => {
        vote({username, movieId, value});

        setValue(value);
    };

    if(!isLogged) return null;

    return (
        <Voting
            value={value}
            onChange={votingAction}
        />
    );
}

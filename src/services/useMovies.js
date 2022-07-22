import {useEffect, useState} from "react";
import _ from 'lodash';

const MOVIES_KEY = 'MOVIES';


const getMovies = () => {
    let movies = window.localStorage.getItem(MOVIES_KEY);
    return movies ? JSON.parse(movies): [];
}

const addMovie = ({title, url, id, description, like, dislike, shareBy}) => {
    let list = getMovies();

    if(checkExistVideo(id)) {
        throw 'This video had been shared';
    }

    window.localStorage.setItem(MOVIES_KEY, JSON.stringify([
        ...list,
        {
            title, url, id, description, like, dislike, shareBy
        }
    ]));
};

const checkExistVideo = (id) => {
    let list = getMovies();

    let items = _.filter(list, {id});

    return _.size(items) > 0;
}

export const useMovies = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let movies = getMovies();
        setItems(movies);
    }, []);

    return {items, addMovie};
}

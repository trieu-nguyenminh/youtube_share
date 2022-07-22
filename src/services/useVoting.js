import _ from 'lodash';

const VOTES_KEY = 'VOTES:';
const getVoting = (username, movieId) => {
    let list = window.localStorage.getItem(VOTES_KEY);

    let items = JSON.parse(list) ?? [];
    return _.find(items, (item) => {
        return item?.votedBy === username && item?.movieId === movieId;
    });
}


const vote = ({username, movieId, value}) => {
    let listOfAll = window.localStorage.getItem(VOTES_KEY);

    let items = JSON.parse(listOfAll) ?? [];

    window.localStorage.setItem(VOTES_KEY, JSON.stringify([
        ...items,
        {
            votedBy: username,
            movieId,
            value
        }
    ]));
}

export const useVoting = () => {
    return {
        vote,
        getVoting,
    }
}

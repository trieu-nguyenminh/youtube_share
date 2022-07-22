import {Card} from "primereact/card";
import PropTypes from "prop-types";
import {Button} from "primereact/button";

export const MovieCard = ({title, description, youtubeId, voting, shareBy, like = 0, dislike = 0}) => {
    return (
        <div className="flex flex-column md:flex-row">
            <div>
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full"
                />
            </div>
            <Card
                title={title}
                subTitle={(
                    <div className="flex flex-row align-items-center justify-content-between" style={{gap: 24}}>
                        Shared by: {shareBy}
                        {voting}
                    </div>
                )}
                className="shadow-none"
            >
                <div className="flex flex-row align-items-center" style={{gap: 16}}>
                    <div><i className="fa-regular fa-thumbs-up" />&nbsp;{like}</div>
                    <div><i className="fa-regular fa-thumbs-down" />&nbsp;{dislike}</div>
                </div>
                <div className="text-xl font-bold">Description</div>
                <div>
                    {description}
                </div>
            </Card>
        </div>
    );
}


MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    youtubeId: PropTypes.string.isRequired,
    like: PropTypes.number,
    voting: PropTypes.node,
};


export const Voting = ({value = -1, onChange}) => {

    if(value === -1) {
        return (
            <div className="flex flex-row align-items-center" style={{gap: 24}}>
                <Button
                    className="p-button p-button-icon-only p-button-outlined p-button-rounded"
                    onClick={() => onChange(1)}
                >
                    <i className="fa-regular fa-thumbs-up" />
                </Button>

                <Button
                    className="p-button p-button-icon-only p-button-outlined p-button-rounded"
                    onClick={() => onChange(0)}
                >
                    <i className="fa-regular fa-thumbs-down" />
                </Button>
                (un-voted)
            </div>
        )
    }

    if(value === 1) {
        return (
            <div><i className="fa-solid fa-thumbs-up" />&nbsp;(voted up)</div>
        )
    }

    return (
        <div><i className="fa-solid fa-thumbs-down" />&nbsp;(voted down)</div>
    );
}

Voting.propTypes = {
    value: PropTypes.oneOf([-1, 0, 1]),
    onChange: PropTypes.func,
};


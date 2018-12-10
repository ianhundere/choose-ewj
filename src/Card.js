import React from 'react';

const Card = props => {
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img
                src={`https://robohash.org/${props.id}?200x200`}
                alt="characters"
            />
            <div>
                <h2>
                    {props.name}
                    <p>{props.email}</p>
                </h2>
            </div>
        </div>
    );
};

export default Card;

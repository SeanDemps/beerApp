import React from 'react';

export const Header = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={props.buttonAction}>{props.buttonTitle}</button>
        </div>
    );
}    
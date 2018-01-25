import React from 'react';
import Radium from 'radium';

const styles = {
    imageStyle: {
        width: '80vw',
        maxWidth: '300px',
        float: 'left',
        marginTop: '20px',
        marginLeft: '20px',
        border: '2px solid black'        
    },

    containerStyle: {
        width: '80vw',
        maxWidth: '600px',
        float: 'left',
        marginLeft: '20px'
    },

    subtitle: {
        textDecoration: 'underline',        
        ':hover': {
            color: 'blue',
            cursor: 'pointer'
        }
    },

    contentStyle: {
        border: '2px solid black',
        padding: '10px'
    }
};

const DisplayCardComponent = (props) => {
    return (
        <div>
            <img style={styles.imageStyle} src={props.image} />
            <div style={styles.containerStyle}>
                <h1 style={styles.contentStyle}>{props.title}</h1>
                <div style={styles.contentStyle}>
                    <h3 style={ props.subtitleAction ? styles.subtitle : undefined} onClick={props.subtitleAction}>{props.subtitle}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export const Display = Radium(DisplayCardComponent);
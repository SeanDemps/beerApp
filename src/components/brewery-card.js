import React from 'react';
import { connect } from 'react-redux';

import { hideBreweryCard } from '../containers/app-redux';
import { Display } from './display-component';

const BreweryCard = (props) => {

    return (
        <div>
            <button onClick={props.hideBreweryCard}>{'<<back'}</button>
            <Display
                image={props.breweryInfo.image}
                title={props.breweryInfo.name}
                subtitle={props.breweryInfo.startYear}
                description={props.breweryInfo.description}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    breweryInfo: state.breweryInfo
});

export default connect(
    mapStateToProps,
    { hideBreweryCard }
)(BreweryCard)
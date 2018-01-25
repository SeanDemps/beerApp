import React from 'react';
import { connect } from 'react-redux';

import { displayBreweryCard } from '../containers/app-redux';
import { Display } from './display-component';

import { safeGet } from '../utils/safe-get';

const BeerCard = (props) => {

    return (
        <Display 
            image={props.beerInfo.image}
            title={props.beerInfo.name}
            subtitle={props.breweryInfo.name}
            subtitleAction={props.displayBreweryCard}
            description={props.beerInfo.description}
        />
    );
};

const mapStateToProps = (state) => ({
    beerInfo: state.beerInfo,
    breweryInfo: state.breweryInfo
});

export default connect(
    mapStateToProps,
    { displayBreweryCard }
)(BeerCard)
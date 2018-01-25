import React from 'react';
import { connect } from 'react-redux';
import { fetchBeer } from './app-redux';

import { Header } from '../components/header-component';
import BreweryCard from '../components/brewery-card';
import BeerCard from '../components/beer-card';

class App extends React.Component {
    componentWillMount() {
        this.props.fetchBeer();
    }

    renderDisplayIfAble() {
            if(this.props.loading) { 
                return <h1>Loading</h1>;
            } else {
                return <BeerCard />
        }
    }

    renderHome() {
        return (
            <div>
                <Header
                    title={'A Random Beer App'}
                    buttonTitle={'Show Another Beer'}
                    buttonAction={this.props.fetchBeer}
                />
                { this.renderDisplayIfAble() }
            </div>
        );
    }

    render() {
        return (
            <div>
                { this.props.shouldDisplayBreweryCard ? <BreweryCard /> : this.renderHome() }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    shouldDisplayBreweryCard: state.shouldDisplayBreweryCard,
    beerInfo: state.beerInfo,
    breweryInfo: state.breweryInfo,
    loading: state.loading,
    error: state.error
});

export default connect(
    mapStateToProps,
    { fetchBeer }
)(App)

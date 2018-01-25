import request from 'request-promise-native';

export class BreweryService {
    constructor(request) {
        this.request = request;
    }

    getBeer() {
        // move API stuff to config file
        return this.request
            .get('https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/random?key=2808ecc4c0839c5b212922e80cd6273b&hasLabels=Y&withBreweries=Y')
            .then(data => JSON.parse(data));
    }
}

export default new BreweryService(request);
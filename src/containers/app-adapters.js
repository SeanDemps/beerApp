import { safeGet } from '../utils/safe-get';

export function adaptBeerData(rawData) {
    const data = safeGet(rawData, ['data']);
    
    const breweryData = safeGet(data, ['breweries', 0]);
    
    const beerInfo = {
        image: safeGet(data, ['labels', 'medium']),
        name: safeGet(data, ['nameDisplay']),
        description: safeGet(data, ['description'], 'description not available')
    };    

    const breweryInfo = {
        name: safeGet(breweryData, ['nameShortDisplay']),
        description: safeGet(breweryData, ['description'], 'description not available'),
        image: safeGet(breweryData, ['images', 'medium']),
        startYear: safeGet(breweryData, ['established'], 'established year not available')
    };

    return {
        beerInfo,
        breweryInfo
    };
}

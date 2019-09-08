import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('SearchApi called')
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch(e) {
            setErrorMessage('Something went wrong.');
        }
    };

    // useEffect will call once when this file is rendered first time.
    useEffect(() => {
        searchApi('Pasta');
    }, []);

    return [searchApi, results, errorMessage];
};
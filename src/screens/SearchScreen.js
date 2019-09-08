import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterByResults = (price) => {
        return results.filter((result) => {
            return result.price == price;
        });
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.styleText}>{errorMessage}</Text> : null }
            {/* <Text style={styles.styleText}>We have found {results.length} results.</Text> */}
            <ScrollView>
                <ResultList style={styles.styleList} title="Cost Effective" results={filterByResults('$')}/>
                <ResultList title="Bit Pricer" results={filterByResults('$$')}/>
                <ResultList title="Big Spender" results={filterByResults('$$$')}/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    styleList: {
        
    },
    styleText: {
        marginTop: 10,
        marginLeft: 15,
        justifyContent: 'center'
    }
});

export default SearchScreen;
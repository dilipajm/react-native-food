import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShow = ({ navigation }) => {
    const [results, setResults] = useState(null);
    const itemId = navigation.getParam('id');

    const getResults = async(id) => {
        const response = await yelp.get(`/${id}`);
        setResults(response.data);
    };

    useEffect(() => {
        getResults(itemId);
    }, []);

    if(!results) {
        return null;
    }
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.styleText}>{results.name}</Text>
            <FlatList 
                data={results.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item})=>{
                    return <Image source={{ uri: item}} style={styles.styleImage}/>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    styleImage: {
        height: 200,
        width: 300,
        marginTop: 10,
    },
    styleText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15
    }
});
export default ResultsShow;
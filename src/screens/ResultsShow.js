import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';
import Image from 'react-native-scalable-image';
import { Dimensions } from 'react-native';

const ResultsShow = ({ navigation }) => {
    const [results, setResults] = useState(null);
    const itemId = navigation.getParam('id');

    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResults(response.data);
    };

    useEffect(() => {
        getResults(itemId);
    }, []);

    if (!results) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.styleText}>{results.name}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image
                            width={Dimensions.get('window').width}
                            source={{ uri: item }}
                        />
                        // <Image
                        //     source={{ uri: item }}
                        //     style={{ flex:1, width: null, height: null }} 
                        //     resizeMode="cover"
                        // />
                    )
                }}
            />
            <Text style={styles.styleReviews}>{results.rating} Stars, {results.review_count} Reviews</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    styleImage: {
        flex: 1,
        width: null
    },
    styleText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 15,
        marginBottom: 15,
        alignSelf:'center'
    },
    styleReviews: {
        color: 'grey',
        fontSize: 12
    }
});
export default ResultsShow;
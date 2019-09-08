import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.styleContainer}>
            <Image style={styles.styleImage} source={{ uri: result.image_url}}/>
            <Text style={styles.styleName}>{result.name}</Text>
            <Text style={styles.styleReviews}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    styleContainer: {
        marginTop: 5,
        marginLeft: 15   
    },
    styleImage: {
        width: 200,
        height: 120,
        borderRadius: 4,
        marginBottom: 10
    },
    styleName: {
        fontWeight: 'bold'
    },
    styleReviews: {
        color: 'grey',
        fontSize: 12
    }
});

export default ResultDetail;
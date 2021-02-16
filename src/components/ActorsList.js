import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import { getPosterUrl } from '../api/api';

const ActorList = ({cast}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cast</Text>
            <FlatList 
                
                horizontal
                showsHorizontalScrollIndicator={false}
                data={cast}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Image style={styles.actor_portrait} source={{uri: getPosterUrl(item.profile_path)}}/>
                            <Text style={{alignSelf: 'center'}}>{item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginStart: 16,
        marginTop: 8,
        fontSize: 17
    },
    container: {
        marginBottom: 16
    },
    actor_portrait: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 16
    }
});

export default ActorList;
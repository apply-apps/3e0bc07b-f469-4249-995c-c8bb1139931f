// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const tales = [
    { id: '1', title: 'The Tortoise and the Hare' },
    { id: '2', title: 'The Boy Who Cried Wolf' },
    { id: '3', title: 'The Lion and the Mouse' },
    { id: '4', title: 'The Ugly Duckling' },
    { id: '5', title: 'Goldilocks and the Three Bears' },
];

const HomeScreen = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.taleButton} onPress={() => navigation.navigate('Tale', { tale: item })}>
            <Text style={styles.taleText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Tales for Kids</Text>
            <FlatList
                data={tales}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    list: {
        alignItems: 'center',
    },
    taleButton: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        width: '100%',
    },
    taleText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

const taleDetails = {
    '1': 'Once upon a time, in a land where animals could talk...',
    '2': 'A shepherd boy who liked to play tricks...',
    '3': 'A little mouse who accidentally wakes a sleeping lion...',
    '4': 'A duckling who feels different and ostracized...',
    '5': 'A little girl named Goldilocks who goes exploring...',
};

const TaleScreen = ({ route }) => {
    const { tale } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{tale.title}</Text>
            <View style={styles.content}>
                <Text style={styles.taleText}>{taleDetails[tale.id]}</Text>
            </View>
        </SafeAreaView>
    );
};

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tale" component={TaleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
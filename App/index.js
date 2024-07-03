// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

// HomeScreen.js
const HomeScreen = () => {
    const navigation = useNavigation();

    const tales = [
        { id: '1', title: 'The Tortoise and the Hare' },
        { id: '2', title: 'The Boy Who Cried Wolf' },
        { id: '3', title: 'The Lion and the Mouse' },
        { id: '4', title: 'The Ugly Duckling' },
        { id: '5', title: 'Goldilocks and the Three Bears' },
    ];

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

// TaleScreen.js
const TaleScreen = ({ route }) => {
    const { tale } = route.params;
    const navigation = useNavigation();

    const tales = {
        '1': 'Once upon a time, in a land where animals could talk...',
        '2': 'A shepherd boy who liked to play tricks...',
        '3': 'A little mouse who accidentally wakes a sleeping lion...',
        '4': 'A duckling who feels different and ostracized...',
        '5': 'A little girl named Goldilocks who goes exploring...',
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{tale.title}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.taleText}>{tales[tale.id]}</Text>
            </View>
        </SafeAreaView>
    );
};

const taleStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
        padding: 10,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    title: {
        fontSize: 32,
        color: '#FFFFFF',
        textAlign: 'center',
        flex: 1,
    },
    content: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        borderRadius: 10,
    },
    taleText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tale" component={TaleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
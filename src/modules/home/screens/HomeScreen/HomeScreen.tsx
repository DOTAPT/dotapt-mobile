import { Text, View } from 'react-native';

import { styles } from './styles';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native Template</Text>
            <Text style={styles.description}>Start building your next mobile application.</Text>
        </View>
    );
};

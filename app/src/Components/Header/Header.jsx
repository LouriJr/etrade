
import { StyleSheet, View } from 'react-native';

export default function Header() {


    return (
        <View style={styles.header}>

        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: '#b20000',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    imageContainer: {
        height: 40,
        width: 40,
        marginLeft: 35,
        marginTop: 30
    },
    image: {
        marginTop: 10,        
        height: 40,
        width: 40,
    }
});

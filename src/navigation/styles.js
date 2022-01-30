import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 8},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 4,
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        borderRadius: 8,
        height: 60,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
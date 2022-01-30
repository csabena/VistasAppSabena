import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#fff',
        paddingBottom: 120,
    },
    list: {
        flex: 1,
    },
    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    total: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        padding: 8,
    }
});

export default styles;
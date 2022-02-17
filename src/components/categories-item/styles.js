import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //flexGrow: 0.5,
      //height: height / 4,
      borderRadius: 6,
      margin: 4,
      //justifyContent: "center",
    },
    containerTouchable: {
        flex: 1,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 8
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    }
  });


  export default styles;
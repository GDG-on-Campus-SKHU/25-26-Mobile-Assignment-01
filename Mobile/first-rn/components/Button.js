
import { Pressable, Text, StyleSheet } from "react-native";

// title과 onPress를 props로 받습니다.
function Button({ title, onPress }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        padding: 15,
        margin: 15,

    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});

export default Button;

// {/*function Button({title:"하고싶은말쓰기"}) {*/}
// {/*    return(*/}
// {/*        <Text>{title}</Text>*/}
// {/*    ) ->비구조화할당*/}
// {/*}*/}
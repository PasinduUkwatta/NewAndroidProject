import React, {useState} from "react";
import {Button, TextInput, View,StyleSheet,Modal} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>
                <Button title="ADD" onPress={props.onAddGoal.bind(this,enteredGoal)}/>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create(
    {
        inputContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'

        },
        input: {
            borderWidth: 1,
            borderColor: 'black',
            padding: 10, width: '80%'

        },
}
)


export default GoalInput;

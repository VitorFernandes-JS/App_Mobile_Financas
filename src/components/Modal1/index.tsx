import React, {useState} from 'react';
import { View, Text, Modal} from 'react-native';

export function Modal1() {
    return(
        <View>
            <Modal
                animationType="slide"
            >
                <Text>teste</Text>
            </Modal>
        </View>
    );
}
import React, {useState} from 'react';
import { View, Text, Modal, Button, TouchableOpacity} from 'react-native';
import { styles, viewButtonStyles } from './styles'
import { AntDesign } from '@expo/vector-icons';

export function Modal1() {
    const [visible, setVisible] = useState(false)
    
    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                // style={styles.modal1}
            >
                <View style={styles.viewModal}>
                <Text style={styles.modalText}>Informações</Text>
                <Text style={styles.modalSubtitle}>
                    Este ícone em azul {`\n`}
                    significa que o ín-{`\n`}
                    dice é sobre Renda{`\n`}
                    Fixa.
                </Text>
                <TouchableOpacity
                onPress={() => {
                    setVisible(false);
                }}
            >
                <Text></Text>
                <AntDesign
                 name="closecircleo"
                 color='red'
                 size={25}
                 style={styles.closeModalIcon}
                />
            </TouchableOpacity>
                </View>
            </Modal>
            

            <View style={viewButtonStyles({ left: 55, top: -10 }).viewButton}>
            <TouchableOpacity
                onPress={() => {
                    setVisible(true);
                }}
            >
                <Text></Text>
            </TouchableOpacity>
            </View>

            <View style={viewButtonStyles({ left: -70, top: -24 }).viewButton}>
            <TouchableOpacity
                onPress={() => {
                    setVisible(true);
                }}
            >
                <Text></Text>
            </TouchableOpacity>
            </View>

            <View style={viewButtonStyles({ left: 180, top: -36 }).viewButton}>
            <TouchableOpacity
                onPress={() => {
                    setVisible(true);
                }}
            >
                <Text></Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
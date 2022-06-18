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
            >
                <View style={styles.viewModal}>
                <Text style={styles.modalText}>Informações</Text>
                <Text style={styles.modalSubtitle}>
                    Este ícone  </Text>
                    <View style={viewButtonStyles({ left: 55, top: -10 }).viewButton}></View>
                    <Text style={styles.modalSubtitle}>  signifi- {`\n`}
                    ca que o índice é sobre{`\n`}</Text>
                    o assunto Renda Fixa.{`\n`}
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
                <Text style={styles.interrogation}>?</Text>
            </TouchableOpacity>
            </View>

            <View style={viewButtonStyles({ left: -70, top: -24 }).viewButton}>
            <TouchableOpacity
                onPress={() => {
                    setVisible(true);
                }}
            >
                <Text style={styles.interrogation}>?</Text>
            </TouchableOpacity>
            </View>

            <View style={viewButtonStyles({ left: 180, top: -36 }).viewButton}>
            <TouchableOpacity
                onPress={() => {
                    setVisible(true);
                }}
            >
                <Text style={styles.interrogation}>?</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}
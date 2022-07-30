import React, { useState } from "react";
import { SafeAreaView, Text, Modal } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

export function ModalPattern() {
    const [visible, setVisible] = useState(false);

    return (
        <SafeAreaView>
            <Modal animationType="slide" transparent={true} visible={visible}>
                <SafeAreaView style={styles.viewModal}>
                    <Text style={styles.modalText}>Informações</Text>
                    <SafeAreaView style={styles.line}></SafeAreaView>
                    <Text style={styles.modalSubtitle}>
                        Este ícone <Text />
                        <SafeAreaView
                            style={styles.viewButton}
                        ></SafeAreaView>
                        <Text style={styles.modalSubtitle}>
                            {" "}
                            signifi- {`\n`}
                            ca que o índice é sobre{`\n`}
                        </Text>
                        o assunto Renda Fixa.{`\n`}
                    </Text>
                    <RectButton
                        onPress={() => {
                            setVisible(false);
                        }}
                    >
                        <Text></Text>
                        <AntDesign
                            name="closecircleo"
                            color="red"
                            size={25}
                            style={styles.closeModalIcon}
                        />
                    </RectButton>
                </SafeAreaView>
            </Modal>

            <SafeAreaView style={styles.viewButton}>
        <RectButton
          onPress={() => {
            setVisible(true);
          }}
        >
          <Text style={styles.interrogation}>?</Text>
        </RectButton>
      </SafeAreaView>

        </SafeAreaView>
    )
};
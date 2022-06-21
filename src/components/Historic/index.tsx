import React from "react";
import { View, Text, TouchableOpacity} from "react-native";

import { styles } from "./styles";
import { EvilIcons } from '@expo/vector-icons';

export function Historic() {
  return (
    <View style={styles.viewHistoric}>
      <View style={styles.lineHistoric}></View>
      <View>
        <View style={styles.viewHistoricInternal}>
          <Text style={styles.titleHistoric}>Histórico</Text>
          <TouchableOpacity>
          <EvilIcons
            name={"trash"}
            style={styles.iconTrash}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.lineHistoric1}></View>
          <Text style={styles.textHistoricValor1}>Valor Total: R$450.000,00 | 11/07/22</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.lineHistoric2}></View>
          <Text style={styles.textHistoricValor2}>Valor Total: R$45.034,00 | 12/01/22</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.lineHistoric3}></View>
          <Text style={styles.textHistoricValor3}>Valor Total: R$3.700 | 11/02/22</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.lineHistoric4}></View>
          <Text style={styles.textHistoricValor4}>Valor Total: R$2.789,32 | 12/04/22</Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.lineHistoric5}></View>
          <Text style={styles.textHistoricValor5}>Valor Total: R$1.500,89 | 11/05/22</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

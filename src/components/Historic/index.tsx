import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Historic() {
    return (
        <View>
        <View style={styles.lineHistoric}></View>
          <View style={styles.viewHistoric}>
            <Text style={styles.textHistoric}>Histórico</Text>
            </View>
            </View>
            );
}
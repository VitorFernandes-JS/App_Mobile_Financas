import React from "react";
import { SafeAreaView, Text, TouchableOpacity, Image} from "react-native";
import { styles } from "./styles";

import iconHome from "../../assets/icon_home.png";
import iconPig from "../../assets/icon_pig.png";
import star from "../../assets/star.png";
import iconHeart from "../../assets/icon_heart.png";
import iconProfile from "../../assets/icon_perfil.png";

export function Baseboard() {

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity>
                <Image source={iconHome} style={styles.iconHome}/>
                <Text style={styles.textHome}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={iconPig} style={styles.iconPig}/>
                <Text style={styles.textHome}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={iconHeart} style={styles.iconHeart}/>
                <Text style={styles.textHome}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={iconProfile} style={styles.iconProfile}/>
                <Text style={styles.textHome}>Menu</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};
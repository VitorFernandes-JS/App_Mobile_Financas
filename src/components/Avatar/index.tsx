import React, { useState, useEffect} from 'react';
import { Image, View, TouchableOpacity, Modal, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

type Params = {
    token: string;
  }
  
  type Profile = {
    email: string;
    family_name: string;
    given_name: string;
    locale: string;
    name: string;
    picture: string;
  }

export function Avatar( ) {
    const { secondary, heading  } = theme.colors

    const [profile, setProfile] = useState({} as Profile);
    const route = useRoute();
    const [visible, setVisible] = useState(false)

    const { token } = route.params as Params;

    async function loadProfile() {
        const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
        const userInfo = await response.json();
        setProfile(userInfo);
      }
    
      useEffect(() => {
        loadProfile();
      },[])
    
    return (
            <View>
               <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
              >
                <View>
                <Text style={styles.modalText}>Informações</Text>
                <Text style={styles.modalSubtitle}>oi</Text>
                </View>

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
                </Modal>

            <TouchableOpacity
              onPress={() => {
                setVisible(true);
            }}
            >
            
            <View style={styles.borderAvatar}></View>
            </TouchableOpacity>
            
            <Image 
                source={{ uri: profile.picture }}
                style={[ styles.avatar, {zIndex: 1} ]} 
            />
            </View>
    )
}
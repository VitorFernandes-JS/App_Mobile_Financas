import React, { useState, useEffect} from 'react';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';

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

export function Avatar({ source }) {
    const { secondary, heading  } = theme.colors

    const [profile, setProfile] = useState({} as Profile);
    const route = useRoute();

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
        <LinearGradient
        style={styles.container}
        colors={[ secondary, heading  ]}
        >
            <Image 
                source={{ uri: profile.picture }}
                style={ styles.avatar } 
            />
        </LinearGradient>
    )
}
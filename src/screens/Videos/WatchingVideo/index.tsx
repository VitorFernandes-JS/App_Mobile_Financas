import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';

import { Header } from "../../../components/header";
import { Baseboard } from "../../../components/baseboard";

import { WebView } from 'react-native-webview';

interface IVideosProps {
    token: string;
  }

export function WatchingVideo({ token }: IVideosProps) {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <SafeAreaView>
            
        </SafeAreaView>
        <Baseboard token={token}/>
    </SafeAreaView>
  );
}
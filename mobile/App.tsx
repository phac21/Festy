import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { StatusBar } from 'react-native'

import { 
  useFonts, 
  Nunito_600SemiBold, 
  Nunito_700Bold, 
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito';

import AppStack from './src/routes/AppStack';
import FastyOnboarding from './src/components/Onboarding';

export default function App() {
  const [onboarding, setOnboarding] = useState<boolean>(false);
  async function onDoneFunction() {
    setOnboarding(true);
    await AsyncStorage.setItem('onboarding', 'done');
  }

  useEffect(() => {
    async function getOnboardingValue() {
      const onboardingvalue = await AsyncStorage.getItem('onboarding');
      if (onboardingvalue) {
        setOnboarding(true);
      } else {
        setOnboarding(false);
      }
    }
    getOnboardingValue();
  }, []);

  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return !onboarding ? (
      <FastyOnboarding onDoneFunction={onDoneFunction} />
    ):(
      <>
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        <AppStack />
      </>
    );
  }
}

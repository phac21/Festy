import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarkerImg from '../images/map-marker.png';
import api from '../services/api';

interface Company {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function CompaniesMap() {
  const [companies, setCompanies] = useState <Company[]> ([]);
  const navigation = useNavigation();

  useFocusEffect (() => {
    api.get('companies').then(response => {
      setCompanies(response.data);
    })
  });

  function handleNavigateToCreateCompany() {
    navigation.navigate('SelectMapPosition');
  }

  function handleNavigateToCompanyDetails(id: number) {
    navigation.navigate('CompanyDetails', { id });
  }

  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -15.8643772,
          longitude: -48.0953451,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} 
        style={styles.mapStyle}
      >
        {companies.map(company => {
          return (
            <Marker 
            key={company.id}
            icon={mapMarkerImg}
            calloutAnchor={{ x: 2.7, y: 0.8 }}
            coordinate={{ 
              latitude: company.latitude,
              longitude: company.longitude,
            }}
          >
            <Callout tooltip={true} onPress={() => handleNavigateToCompanyDetails(company.id)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{company.name}</Text>
              </View>
            </Callout>
          </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{companies.length} Empresas encontradas</Text>
        <RectButton style={styles.createCompany} onPress={handleNavigateToCreateCompany}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 3,
  },

  calloutText: {
    color: '#280A50',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3',
  },

  createCompany: {
    width: 56,
    height: 56,
    backgroundColor: '#280A50',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }
});
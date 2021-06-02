import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import CompaniesMap from '../pages/CompanyMap';
import SelectMapPosition from '../pages/CreateCompany/SelectMapPosition';
import CompanyData from '../pages/CreateCompany/CompanyData';
import CompanyDetails from '../pages/CompanyDetails';
import Header from '../components/Header';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: { backgroundColor: '#F2F3F5' }
        }}>
        <Screen 
          name="CompaniesMap" 
          component={CompaniesMap} 
        />

        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition}
          options={{ 
            headerShown: true,
            header: (props) => <Header title="Selecione no mapa" {...props} />,
          }}
        />
        
        <Screen 
          name="CompanyData" 
          component={CompanyData}
          options={{ 
            headerShown: true,
            header: (props) => <Header title="Dados do Empresa" {...props} />,
          }}
        />
        
        <Screen 
          name="CompanyDetails"
          component={CompanyDetails}
          options={{ 
            headerShown: true,
            header: (props) => <Header title="Empresa" showCancel={false} {...props} />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    //El safearea ayuda a que las screens se muestren de forma correcta 
    //independinte mente de si hay un notch como el de iphone 
    //en la pantalla
        // <BoxObjectModelScreen/>
        // <ContadorScreen />
        //  <HolaMundoScreen/> 
        // <DimensionesScreen/>
        // <PositionScreen/>
        // <FlexScreen/>
        <TareaScreen/>
  )
}
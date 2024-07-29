import AbsensiApp from './components/AbsensiApp'
import LoginScreen from './components/LoginPage'
import App from './components/AbsensiApp'
import UserScreen from './components/UserScreen'
import RoutesApp from './components/Navigation'
import ScannerQR from './components/Scan'
import { registerRootComponent } from 'expo';

registerRootComponent(RoutesApp);


export default function Main(){
  return (
  < RoutesApp/>
  )
}
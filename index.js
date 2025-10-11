import { registerRootComponent } from 'expo';
import App from './App'; // 파일 이름 그대로 App이면 이렇게!

registerRootComponent(App);



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
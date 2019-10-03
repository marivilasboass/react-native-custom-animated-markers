import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Maps from '~/pages/Maps';
const Routes = createAppContainer(createSwitchNavigator({Maps}));

export default Routes;

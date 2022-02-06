import Pizza from '../components/Pizza'
import {Hamburguesas} from '../components/Hamburguesas'
import Kebabs from '../components/Kebabs'
import Home from '../components/Home';

export const header = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/pizza',
    title: 'Pizza',
    component: Pizza,
  },
  {
    id: 3,
    path: '/Hamburguesas',
    title: 'Hamburguesas',
    component: Hamburguesas,
  },
  {
    id: 4,
    path: '/Kebabs',
    title: 'Kebabs',
    component: Kebabs,
  },
];

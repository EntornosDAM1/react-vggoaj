import ArchivoJugar from '../components/ArchivoJugar'
import Hamburguesas from '../components/Hamburguesas'
import Kebabs from '../components/Kebabs'

export const header=[
  {
    id:1,
    title:'Pizzas',
    path: '/ArchivoJugar',
    component:ArchivoJugar,
  },
  {
    id:2,
    title:'Hamburguesas',
    path: '../components/Hamburguesas',
    component:Hamburguesas,
  },
  {
    id: 3,
    path: '/Kebabs',
    title: 'Kebab',
    component: Kebabs,
  }
];
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import Content from '../components/Content';
import Home from '../components/HelloWorld';
import List from '../components/todoList';
import Son from '../components/FatherToSon';
import Ax from '../components/List/axios';
import Li from '../components/List/list';
import Form from '../components/List/form';
const routes = [
    { 
        path: '/', 
        component: Home
     },
  { 
    path: '/content/:id', 
    component: Content
 },
  { 
    path: '/home', 
    component: Home
 },
 { 
    path: '/list', 
    name:'list',
    component: List,
    children: [
      {
        path: '',
        component: Ax
      },
        {
          path: 'axios',
          component: Ax
        },
        {
          path: 'list',
          component: Li
        },
        {
          path: 'form',
          component: Form
        },
      ]
 },
 { 
    path: '/son', 
    component: Son
 },
{
  path:'/*',
  redirect:'/home'
}

]

const router = new Router({
  routes
})

export default router;
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: require('@/components/Main/Main').default
    },
    {
      path: '/nosotros',
      name: 'Nosotros',
      component: require('@/components/Nosotros/Nosotros').default
    },
    {
      path: '/cursos',
      name: 'Cursos',
      component: require('@/components/Cursos/Cursos').default,
    },
    {
      path:'/modulos',
      name:'modules',
      component: require('@/components/Cursos/modules').default
    },
    {
      path:'/clases',
      name:'class',
      component: require('@/components/Cursos/Class_page').default
    },
    {
      path: '/empresa',
      name: 'Empresas',
      component: require('@/components/Empresas/Empresas').default
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: require('@/components/Contacto/Contacto').default
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: require('@/components/Admin/Login').default
    },
    {
      path: '/admin/panel',
      name: 'Panel',
      component: require('@/components/Admin/Admin').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

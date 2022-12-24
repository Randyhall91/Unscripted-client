import { createRouter, createWebHashHistory } from 'vue-router'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: loadPage('PortfolioPage')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: loadPage('BlogPage')
  },
  {
    path: '/blogpost/:id',
    name: 'BlogPost',
    component: loadPage('BlogPostPage')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('ContactPage')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: loadPage('PricingPage')
  }

]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

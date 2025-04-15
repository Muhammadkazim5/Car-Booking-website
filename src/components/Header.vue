<template>
  <header :class="headerClass" class="flex justify-center px-5 p-2 z-50 fixed top-0 w-full bg-white drop-shadow-sm">
    <div class="flex justify-between items-center w-full md:w-5/6 md:relative">
      <Logo/> 
      <nav class="space-x-6 hidden md:flex" :class="{'scrolled-nav' : isScrolled}">
        <router-link v-for="link in links" :key="link.path" :to="link.path" :class="{'active-link': $route.path === link.path}">
          {{ link.name }}
        </router-link>
      </nav>
      <!-- Mobile Hamburger -->
      <div class="md:hidden flex" >
       <button @click="toggleMenu" class="text-gary-800 focus:outline-none" aria-label="Toggle Mobile Menu">
         <FaBarsStaggered class="text-2xl" />
       </button>
       <div v-if="menuVisible" class="absolute left-0 top-16 bg-white shadow-lg w-full p-4 flex flex-col space-y-6">
        <router-link v-for="link in links" :key="link.path" :to="link.path" :class="{'active-link': $route.path === link.path}" @click="menuClose">
          {{ link.name }}
        </router-link>  
       </div>
      </div>
  </div>
  </header>
</template>

<script setup>
import Logo from './Logo.vue'
import { FaBarsStaggered } from '@kalimahapps/vue-icons';
import { useRouter } from 'vue-router'
import { computed, onBeforeUnmount,ref,onMounted } from 'vue'
const router=useRouter()
const isScrolled=ref(false)
const menuVisible=ref(false)
const toggleMenu=()=>{
  menuVisible.value=!menuVisible.value
}
 const links=[
    {name:'Home',path:'/'},
    {name:'About',path:'/about'},
    {name:'Services',path:'/services'},
    {name:'Pricing',path:'/pricing'},
    {name:'Blog',path:'/blog'},
    {name:'Cars',path:'/cars'},
    {name:'Contact',path:'/contact'},

    ]

const menuClose=()=>{
  menuVisible.value=false
}

   const headerClass=computed(()=>({
     'sm:bg-transparent': !isScrolled.value,
     'sm:bg-white': isScrolled.value,
      'shadow-md': isScrolled.value,
      'p-4':true,
      'sm:py-10':!isScrolled.value,
   })) 
   const handleScroll=()=>{
     isScrolled.value=window.scrollY>50
   }
   onMounted(()=>{
     window.addEventListener('scroll',handleScroll)
   })
   onBeforeUnmount(()=>{
     window.removeEventListener('scroll',handleScroll)
   })
</script>

<style>
nav a{
  color:white;
  transition: color 0.3s ease;

}
nav a.active-link{
  color:#10b981 !important;
  font-weight: bold;
}
nav.scrolled-nav a{
color:black
}
</style>
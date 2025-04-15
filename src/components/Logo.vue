<template>
  <router-link>
    <h1 class="uppercase text-2xl font-bold cursor-pointer">
        <span :class="carClass">Car</span>
        <span class="text-green-500">Book</span>
    </h1>
  </router-link>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
export default {
  setup(){
    const isscrolled=ref(false)
    const isMobile=ref(window.innerWidth<760)
    const handleScroll=()=>{
       isscrolled.value=window.scrollY>50
    }
    onMounted(()=>{
      window.addEventListener('scroll',handleScroll)
    })
    onBeforeUnmount(()=>{
      window.removeEventListener('scroll',handleScroll)
    })
    const carClass=computed(()=>{
        if(isMobile.value) return 'text-black'
        return isscrolled.value?'text-black':'text-white'
    })
    return{
        carClass
    }
  }
}
</script>

<style>

</style>
<template>
  <section  :style="{backgroundImage: `url(${bgImage})`}" class="bg-cover bg-center h-screen flex items-center justify-center text-white relative">
    <div class="absolute inset-0 bg-black opacity-25"></div>
    <div class="relative flex items-center justify-center h-full w-full text-center p-4 text-white">
      <div class="w-full md:w-3/5 content-wrapper"  :class="{'animate-in': isvisible}">
        <h1 class="text-5xl font-bold mb-4">Fast & Easy Way To Rent A Car</h1>
        <p class="text-md md:text-xl mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi minus necessitatibus enim corporis, voluptatem sequi libero cum repellendus</p>
        <p class="text-2xl font-semibold">Easy steps for renting a car</p>
      </div>
    </div>

  </section>
</template>

<script setup>
import bgImage from '../assets/images/bg_1.jpg'
import { onMounted, ref } from "vue"
const isvisible=ref(false)
onMounted(()=>{
    setTimeout(() => {
        isvisible.value=true
    }, 100)
 })
</script>

<style>
.content-wrapper{
    opacity:0;
    transform:translateY(80px);
    transition: all 1s ease-in-out;
}
.content-wrapper.animate-in{
    opacity:1;
    transform:translateY(0);
}
</style>
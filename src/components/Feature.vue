<template>
  <Heading description="What we offer" title="Featured Vehicles"/>
  <div class="w-full h-full py-10">
    <swiper
      :modules="[Autoplay]"
      :space-between="30"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      loop
      navigation
      :breakpoints="{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }" class="w-4/5 drop-shadow-2xl">
      <swiper-slide v-for="(car,index) in cars" :key="index">
        <CarCard :id="car.id" :name="car.name" :brand="car.brand"  :price="car.price" :image="car.image"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import Heading from './Heading.vue'
import CarCard from './CarCard.vue'
import {cars} from '../data/carsData.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'
</script>

<style>

</style>
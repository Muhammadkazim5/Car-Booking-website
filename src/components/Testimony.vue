<template>
    <div class="bg-gray-100/90">
        <Heading title="Happy Clients" description="Testimonial" />
        <section class="py-10 md:py-20 p-4">
            <swiper :modules="[Autoplay]" :space-between="30" :autoplay="{ delay: 2500, disableOnInteraction: false }"
                loop :breakpoints="{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }" class="w-full max-w-5xl">
                <swiper-slide v-for="(testimony, index) in testimonys" :key="index">
                    <TestimonyCard :name="testimony.name" :desc="testimony.desc" :position="testimony.position"
                        :image="testimony.image" />
                </swiper-slide>
            </swiper>
        </section>
    </div>
</template>

<script setup>
import Heading from '../components/Heading.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/autoplay'
import { testimonys } from '../data/testimony.js'
import TestimonyCard from '../components/TestimonyCard.vue'
</script>

<style></style>
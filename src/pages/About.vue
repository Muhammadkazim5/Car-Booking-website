<template>
  <BgContainer title="About" bgImage="bg_3.jpg" :links="[
    { text: 'Home', to: '/' },
    { text: 'About Us', to: '/about' },
  ]" />
  <AboutUs />
  <CallToAction />
  <Testimony />
  <Statistics />
</template>

<script setup>
import BgContainer from "../components/BgContainer.vue";
import AboutUs from "../components/AboutUs.vue"
import CallToAction from "../components/CallToAction.vue";
import Testimony from "../components/Testimony.vue";
import Statistics from "../components/Statistics.vue";
</script>

<style></style>
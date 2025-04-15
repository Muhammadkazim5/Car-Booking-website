<template>
    <BgContainer title="Services" bgImage="bg_3.jpg" :links="[
        { text: 'Home', to: '/' },
        { text: 'Services', to: '/services' },
    ]" />
    <services />
    <CallToAction />
</template>

<script setup>
import BgContainer from "../components/BgContainer.vue";
import Services from "../components/Services.vue";
import CallToAction from "../components/CallToAction.vue";

</script>

<style></style>
<template>
    <div class="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 h-96">
        <img :src="getImage(image)" alt="" class="w-24 h-24 rounded-full object-cover mb-4">
        <p class="text-gray-400 text-md my-3">{{ desc }}</p>
        <h2 class="text-xl font-semibold">{{ name }}</h2>
        <p class="text-md text-blue-500">{{ position }}</p>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    desc: String,
    image: String,
    position: String,
})
const getImage = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href
}
</script>

<style></style>
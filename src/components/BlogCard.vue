<template>
    <div>
        <img :src="getImage(image)" alt="" class="object-cover h-56 w-full">
        <div class="space-y-2 pt-5">
            <p class="text-sm text-blue-500">
                {{ date }} {{ author }} {{ comments?.length }} comments
            </p>
            <h2 class="text-xl font-medium text-gray-800 mt-2">{{ title }}</h2>
            <router-link :to="`/blog/${id}`">
                <CustomButton text="Read More" />
            </router-link>
        </div>
    </div>
</template>

<script setup>
defineProps({
    id: Number,
    description: String,
    date: String,
    author: String,
    comments: Number,
    image: String,
    title: String,
})
import CustomButton from './CustomButton.vue'
const getImage = (imageName) => {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href
}
</script>

<style></style>
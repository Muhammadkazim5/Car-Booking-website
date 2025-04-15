<template>
    <Heading title="Recent Blog" description="Blog" />
    <section class="flex flex-col md:flex-row  gap-6 justify-center py-10 md:py-20">
        <BlogCard v-for="(blog, index) in blogs" :key="index" :id="blog.id" :date="blog.date" :title="blog.title"
            :image="blog.image" :author="blog.author" :comments="blog.comments" :description="blog.description"
            :class="'md:w-80'" />
    </section>
</template>

<script setup>
import BlogCard from './BlogCard.vue'
import Heading from './Heading.vue'
import { blogs } from '../data/blogData.js'
</script>

<style></style>
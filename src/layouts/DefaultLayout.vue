<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer class="mt-auto"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

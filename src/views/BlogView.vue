<template>
  <div>
    <h1>Post List</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

import PostView from '@/services/PostView';
import { onMounted } from 'vue'

    const service = new PostView() // Trae la clase y se puede usar todo
    const posts = service.getPosts() // Aqui usamos esta funcion de clase

    onMounted(async() => {
        await service.fetchAll()
    })


</script>

<style scoped>

</style>
<template>
  <div>
    <h1>Post Detail</h1>
      <div class="post-container">
        <div class="post-card">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
        <router-link class="link" :to="{name: 'blog'}">Volver atrás</router-link>
      </div>
  </div>
</template>

<script lang="ts" setup>

import PostView from '@/services/PostView'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

  const service = new PostView()
  const post = service.getPost()

  onMounted(async() => {
    const route = useRoute()
    let elemento = route.params.id
    await service.fetchById(elemento)
  })

</script>

<style scoped lang="scss">

.post-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
}

.post-card {
  padding: 20px;
  width: 100%;
  border-radius: 15px;
  background: black;
  color: white;
}

.link {
  margin-top: 25px;
  color: white;
  text-decoration: none;
  background: #42b983;
  border-radius: 15px;
  padding: 15px;
}

</style>

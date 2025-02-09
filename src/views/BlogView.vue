<template>
  <div>
    <h1>Post List</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <router-link :to="{name: 'post', params: {id:post.id }}">
                {{ post.title }}
            </router-link>
        </li>
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

<style scoped lang="scss">

.post-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
    
    li {
        border-radius: 15px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
    }

        a {
            text-decoration: none;
            color: white;
            cursor: pointer;
        }

    li:hover {
        background: #42b983;
        
        a {
            color: black;
        }
    }
}
</style>
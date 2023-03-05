<template>
    <div class="repository ">
        <div class="repo-name flex">
            <h1><a :href="repo.html_url">{{ repo.name }} </a></h1>
            <img :src="handleFavorited" alt="Favoritar" @click="handleFavorite(repo)">
        </div>

        <p>
            {{ repo.description }}
        </p>

        <div class="stars flex">
            <img src="/icons/stars.svg" alt=""> {{ repo.stargazers_count }}
        </div>
    </div>
</template>

<script setup>
import { favRepositories } from '../../stores/favRepository'
import { ref } from 'vue';
const { addRepo } = favRepositories()

const props = defineProps({
    repo: Object
})

let handleFavorited = ref('/icons/stars.svg')

const handleFavorite = (repo) => {

    addRepo(repo) ? handleFavorited.value = '/icons/stars.svg' : handleFavorited.value = '/icons/yellowStar.svg'

}
</script>

<style scoped lang="scss" src="./repositoryCard.scss" />


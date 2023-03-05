<template>
    <div class="repository ">
        <div class="repo-name flex">
            <h1><a :href="repo.html_url">{{ repo.name }} </a></h1>
            <img :src="handleFavoritedIcon" alt="Favoritar" @click="handleFavorite(repo)">
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
import { onMounted } from 'vue';
import { favRepositories } from '../../stores/favRepository'
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const { addRepo } = favRepositories()
const { repositories } = favRepositories()

let handleFavoritedIcon = ref('/icons/stars.svg')

const props = defineProps({
    repo: Object
})

onMounted(() => {
    if (useRoute().name === 'favoritos') {
        repositories.forEach(repo => {
            repo.favorited ? handleFavoritedIcon.value = '/icons/yellowStar.svg' : handleFavoritedIcon.value = '/icons/stars.svg'
        })
    }

    if (useRoute().name === 'repository') {
        repositories.forEach(repository => {
            props.repo.name === repository.name ? handleFavoritedIcon.value = '/icons/yellowStar.svg' : handleFavoritedIcon.value = '/icons/stars.svg'
        })
    }
})


const handleFavorite = (repo) => {
    addRepo(repo) ? handleFavorited.value = '/icons/stars.svg' : handleFavorited.value = '/icons/yellowStar.svg'
}






</script>

<style scoped lang="scss" src="./repositoryCard.scss" />


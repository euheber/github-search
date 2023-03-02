<template>
    <div class="repository ">
        <div class="repo-name flex">
            <h1><a :href="repo.html_url">{{ repo.name }} </a></h1> <img src="/icons/stars.svg" alt="">
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
    const props = defineProps({
        repo: Object
    })
</script>

<style scoped lang="scss" src="./repositoryCard.scss" />


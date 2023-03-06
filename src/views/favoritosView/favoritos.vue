<template>
    <main>
        <section>
            <h1><i class="fa-brands fa-github"></i> Repositórios Favoritos</h1>
            <repositoryCard v-for="repo in repositories" :key="repo.id" :repo = repo />
        </section>
    </main>
</template>

<script setup>
import repositoryCard from '../../components/repositoryCard/repositoryCard.vue';
import {favRepositories} from '../../stores/favRepository';

const {repositories} = favRepositories()

</script>

<style scoped lang="scss" src="./favoritos.scss" />


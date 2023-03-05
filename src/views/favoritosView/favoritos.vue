<template>
    <main>
        <section>
            <repositoryCard v-for="repo in repositories" :key="repo.id" :repo = repo />
        </section>
    </main>
</template>

<script setup>
import repositoryCard from '../../components/repositoryCard/repositoryCard.vue';
import myButton from '../../components/slotButtons/myButton.vue';
import {favRepositories} from '../../stores/favRepository';

const {repositories} = favRepositories()

</script>

<style scoed lang="scss" src="./favoritos.scss" />


<template>
    <main>
        <repositoryCard v-for="repo in listOfRepoCopy" :key="repo.id" :repo=repo />
        <myButton @click="updateRepoList" class="showMoreRepo">Ver mais repositórios</myButton>
    </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import myButton from "../../components/slotButtons/myButton.vue";
import repositoryCard from "../../components/repositoryCard/repositoryCard.vue";
const repositoryName = useRoute().params

let listOfRepo = []
let listOfRepoCopy = ref([])

let firstRepoIndex = ref(0)
let lastRepoIndex = ref(4)

onMounted(async () => {
    await fetch(`https://api.github.com/search/repositories?q=${repositoryName.name}&page=1`)
        .then(response => response.json())
        .then(data => listOfRepo = data.items)
    listOfRepoCopy.value = listOfRepo.slice(firstRepoIndex.value, lastRepoIndex.value)

})

const updateRepoList = () => {
    firstRepoIndex.value += 4
    lastRepoIndex.value += 4

    listOfRepo.slice(firstRepoIndex.value, lastRepoIndex.value).forEach(item => {
        listOfRepoCopy.value.push(item)
    })
}


</script>

<style scoped lang="scss" src="./repositoryView.scss" />


<template>
    <main>
        <section>
        <repositoryCard v-for="repo in repositoriesOnScreen" :key="repo.id" :repo=repo />
        <myButton @click="updateRepoList" class="showMoreRepo"  v-if=" !listOfRepo.length < 4 ||  !currentPage === 33">Ver mais repositórios</myButton>
    </section>
    </main>

    <userNotFound ref="openErrorModal" message="repositório" />
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import myButton from "../../components/slotButtons/myButton.vue";
import repositoryCard from "../../components/repositoryCard/repositoryCard.vue";
import userNotFound from "../../components/modal/userNotFound.vue";

const repositoryName = useRoute().params

let listOfRepo = ref([])
let repositoriesOnScreen = ref([])
let openErrorModal = ref()

let firstRepoIndex = ref(0)
let lastRepoIndex = ref(5)
let currentPage = ref(1)


onMounted(async () => {
    await fetch(`https://api.github.com/search/repositories?q=${repositoryName.name}&page=${currentPage.value}`)
        .catch(e => { console.log(e) })
        .then(response => response.json())
        .then(data => listOfRepo.value = data.items)
    repositoriesOnScreen.value = listOfRepo.value.slice(firstRepoIndex.value, lastRepoIndex.value)

    if (listOfRepo.value.length === 0) {
        openErrorModal.value.handleModal()
    }
})

const updateRepoList = () => {
    if (repositoriesOnScreen.value.length === listOfRepo.value.length) {
        currentPage.value++
        fetchMoreData()
    }

    firstRepoIndex.value += 4
    lastRepoIndex.value += 4
    listOfRepo.value.slice(firstRepoIndex.value, lastRepoIndex.value).forEach(item => {
        repositoriesOnScreen.value.push(item)
    })
}

const fetchMoreData = async () => {
    await fetch(`https://api.github.com/search/repositories?q=${repositoryName.name}&page=${currentPage.value}`)
        .catch(e => { console.log(e) })
        .then(response => response.json())
        .then(data => listOfRepo.value.push(...data.items))

    updateRepoList()
}


</script>

<style scoped lang="scss" src="./repositoryView.scss" />


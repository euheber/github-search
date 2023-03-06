<template>
    <main>
        <section>
            <div class="profile-container">
                <div class="user-img">
                    <img :src="user.avatar_url" alt="">
                </div>
                <div class="user-info">
                    <div class="header">
                        <h1>{{ user.name }}</h1>
                        <h2>{{ user.login }}</h2>
                    </div>
                    <div class="profile-details">
                        <ul>
                            <li v-if="user.company">
                                <img src="/icons/company.svg" alt="Empresa"> {{ user.company }}
                            </li>
                            <li v-if="user.location">
                                <img src="/icons/location.svg" alt="Localização"> {{ user.location }}
                            </li>
                            <li v-if="user.public_repos">
                                <img src="/icons/repository.svg" alt="Repositórios"> {{ user.public_repos }}
                            </li>
                            <li v-if="user.followers">
                                <img src="/icons/followers.svg" alt="Seguidores"> {{ user.followers }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="repo-container">
                <repositoryCardVue v-for="repo in userRepoControl" :key="repo.id" :repo="repo" />
                <myButton class="moreRepo" @click="updateRepoList">Ver mais</myButton>
            </div>

        </section>
    </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import repositoryCardVue from '../../components/repositoryCard/repositoryCard.vue';
import myButton from '../../components/slotButtons/myButton.vue';
const userName = useRoute().params

const user = ref('')
let userRepo = ref('')

let firstRepo = ref(0)
let lastRepo = ref(4)
let userRepoControl = ref([])

onMounted(async () => {
    await fetch(` https://api.github.com/users/${userName.name}`)
        .catch(e => console.log(e))
        .then(data => data.json())
        .then(response => user.value = response)

    fetchRepo()

})

const fetchRepo = async () => {
    await fetch(`https://api.github.com/users/${userName.name}/repos?direction=desc`)
        .catch(e => console.log(e))
        .then(data => data.json())
        .then(repo => userRepo.value = repo)

    userRepoControl.value = userRepo.value.slice(firstRepo.value, lastRepo.value)
}

const updateRepoList = () => {
    firstRepo.value += 4
    lastRepo.value += 4

    userRepo.value.slice(firstRepo.value, lastRepo.value).forEach(item => {
        userRepoControl.value.push(item)
    })
}

</script>

<style scoped lang="scss" src="./userProfile.scss"/>


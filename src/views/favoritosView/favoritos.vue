<template>
    <main>
        <section>
            <h1><i class="fa-brands fa-github"></i> Repositórios Favoritos</h1>

            <input type="text" @keydown="filterRepo" placeholder="Busque por um repositório" >
            <repositoryCard v-for="repo in repositories" :key="repo.id" :repo=repo class="repository" />
        </section>
    </main>
</template>

<script setup>
import repositoryCard from '../../components/repositoryCard/repositoryCard.vue';
import { favRepositories } from '../../stores/favRepository';
const { repositories } = favRepositories()

const filterRepo = (e) => {
    const repos = document.querySelectorAll('.repository')
    const param = e.target.value

   

    for (let repo of repos) {
        let repoName = repo.querySelector('h1')
        repoName = repoName.textContent.toLocaleLowerCase()

        if(param === ''){ 
            repo.style.display = 'block'
        }

        if(repoName.includes(param)){ 
            repo.style.display = 'block'
        } else{ 
            repo.style.display = 'none'
        }     
    }
}



</script>

<style scoped lang="scss" src="./favoritos.scss" />


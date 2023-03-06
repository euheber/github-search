<template>
    <header>
        <nav>
            <h1><a href="#">Github <span class="logoStyle">Search</span> </a></h1>

            <ul>
                <li>
                    <RouterLink to="/" :class="[currentPathname === 'home' ? 'active' : '']">Início</RouterLink>
                </li>
                <li>
                    <RouterLink to="/favoritos" :class="[currentPathname === 'favoritos' ? 'active' : '']">Favoritos</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { watchEffect, ref } from 'vue'

const route = useRoute()

let currentPathname = ref('home')

watchEffect(() => {
    currentPathname.value = route.name
})
</script>


<style scoped lang="scss" src="./header.scss" />


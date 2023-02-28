<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
    <header>
        <nav>
            <h1><a href="#">Github <span class="logoStyle">Search</span> </a></h1>

            <ul>
                <li>
                    <RouterLink to="/">Início</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Favoritos</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>


<style scoped lang="scss" src="./header.scss" />


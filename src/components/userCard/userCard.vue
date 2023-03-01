<template>
   <div class="user">   
        <div class="user-img">
            <img src="" alt="Foto de perfil do usuário">
        </div>

        <div class="user-name">
            <h1> 
                <RouterLink :to="'/'">Heber Robert</RouterLink>
            </h1>
        </div>
   </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss" src="./userCard.scss" />


<template>
    <div class="user">
        <div class="user-img">
            <img :src="user.avatar_url" alt="Foto de perfil do usuário">
        </div>

        <div class="user-name">
            <h1>
                <RouterLink :to="'/'">{{ user.login }}</RouterLink>
            </h1>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
    user: Object
})
</script>

<style scoped lang="scss" src="./userCard.scss" />


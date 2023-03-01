<template>
    <main>
        <section class="user-container">
            <userCard />
        </section>
    </main>
</template>

<script setup>
import userCard from '../../components/userCard/userCard.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
const route = useRoute()

const usersName = route.params

let users = ref('')


onMounted(async () => {
    await fetch(` https://api.github.com/search/users?q=${usersName.name}&page=1`)
    .then(response => response.json())
    .then(response => users.value = response)

    console.log(users.value)
})

</script>

<style lang="scss" scoped src="./userView.scss" />

<template>
    <main>
        <section class="user-container">
            <userCard v-for="user in users" :key="user.id" :user="user"/>
        </section>
    </main>
    <userNotFound ref="openErrorModal" usuario="usuário"/>
</template>

<script setup>
import userNotFound from '../../components/modal/userNotFound.vue';
import userCard from '../../components/userCard/userCard.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
const route = useRoute()

const usersName = route.params
const openErrorModal = ref()
let users = ref('')


onMounted(async () => {
   await fetch(`https://api.github.com/search/users?q=${usersName.name}&page=1`)
        .then(response => response.json())
        .then(user => users.value = user.items)

        if(users.value.length === 0){ 
            openErrorModal.value.handleModal()
        }
})

</script>

<style lang="scss" scoped src="./userView.scss" />

<template>
    <main>
        <section class="user-container">
            <userCard v-for="user in userOnScreen" :key="user.id" :user="user"/>
                <myButton @click="updateUserList" class="seeMoreUsers" v-if=" users.length > 4 ||  !currentPage === 33" >Ver mais</myButton>
  
        </section>
    </main>
    <userNotFound ref="openErrorModal" message="usuário"/>
</template>

<script setup>
import userNotFound from '../../components/modal/userNotFound.vue';
import userCard from '../../components/userCard/userCard.vue';
import myButton from '../../components/slotButtons/myButton.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
const route = useRoute()

const usersName = route.params
const openErrorModal = ref()

let currentPage = ref(1)
let users = ref([])
let userOnScreen = ref([])
let firstUserIndex = ref(0)
let lastUserIndex = ref(5)

onMounted(async () => {
   await fetch(`https://api.github.com/search/users?q=${usersName.name}&page=${currentPage.value > 33 ? currentPage.value = 33 : currentPage.value}`)
        .then(response => response.json())
        .then(user => users.value = user.items)

        if(users.value.length === 0){ 
            openErrorModal.value.handleModal()
        }

        userOnScreen.value = users.value.slice(firstUserIndex.value, lastUserIndex.value)
})

const updateUserList = () => {
    if (userOnScreen.value.length === users.value.length) {
        currentPage.value++
        fetchMoreData()
    }

    firstUserIndex.value += 4
    lastUserIndex.value += 4
    users.value.slice(firstUserIndex.value, lastUserIndex.value).forEach(item => {
        userOnScreen.value.push(item)
    })
}

const fetchMoreData = async () => {
    await fetch(`https://api.github.com/search/users?q=${usersName.name}&page=${currentPage.value}`)
        .catch(e => { console.log(e) })
        .then(response => response.json())
        .then(data => users.value.push(...data.items))

        updateUserList()
}

</script>

<style lang="scss" scoped src="./userView.scss" />

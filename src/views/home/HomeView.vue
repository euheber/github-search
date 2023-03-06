<template>
    <main>
        <section class="search-container">
            <i class="fa-brands fa-github"></i>

            <div class="choose-options">
                <myButtonVue :class="[activeParam === 'repo' ? 'active' : '']" @click="handleInputParamSearch('repo')">
                    Repositório
                </myButtonVue>
                <myButtonVue :class="[activeParam === 'user' ? 'active' : '']" @click="handleInputParamSearch('user')">
                    Usuário
                </myButtonVue>
            </div>

            <div class="input-container">
                <input type="text" placeholder="Buscar..." v-model="paramConfig">
                <i class="fa-solid fa-magnifying-glass" @click="fetchInfo"></i>
            </div>


        </section>
    </main>
</template>

<script setup>
import myButtonVue from "../../components/slotButtons/myButton.vue";
import userNotFound from "../../components/modal/userNotFound.vue";
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter()

let paramConfig = ref('')
let activeParam = ref('repo')


const handleInputParamSearch = (param) => {
    activeParam.value = param
}

const fetchInfo = () => {
    if (activeParam.value === 'user') {
        router.push({ path: `/usersView/${paramConfig.value}` })
        return
    }

    router.push({ path: `/repository/${paramConfig.value}` })

}

</script>

<style scoped lang="scss" src="./homeView.scss" />

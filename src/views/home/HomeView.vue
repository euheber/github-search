<template>
    <main>
        <section class="search-container">
            <i class="fa-brands fa-github"></i>

            <div class="choose-options">
                <myButtonVue :class="[activeBtn === 'repo' ? 'active' : '']" @click="handleInputParamSearch('repo')">
                    Repositório
                </myButtonVue>
                <myButtonVue :class="[activeBtn === 'user' ? 'active' : '']" @click="handleInputParamSearch('user')">Usuário
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
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter()

let paramConfig = ref('')
let activeBtn = ref('repo')


const handleInputParamSearch = (btn) => {
    activeBtn.value = btn
}

const fetchInfo = () => {
    if (activeBtn.value === 'user') {
        router.push({ path: `/userView/${paramConfig.value}` })
        return
    }

    if (activeBtn.value === 'repo') {
        // router.push({ path: `/userView/${paramConfig.value}` })
        return
    }
}



</script>

<style scoped lang="scss" src="./homeView.scss" />

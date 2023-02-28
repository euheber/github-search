<script setup>
import myButtonVue from "../../components/slotButtons/myButton.vue";

import { ref } from 'vue';

let activeBtn = ref('repo')


const handleActiveBtn = (btn) => { 

    activeBtn.value = btn

}

</script>

<template>
    <main>
        <section class="search-container">
            <i class="fa-brands fa-github"></i>

            <div class="choose-options">
                <myButtonVue :class="[activeBtn === 'repo' ? 'active' : '']" @click="handleActiveBtn('repo')">Repositório</myButtonVue>
                <myButtonVue :class="[activeBtn === 'user' ? 'active' : '']" @click="handleActiveBtn('user')">Usuário</myButtonVue>
            </div>

            <div class="input-container">
                <input type="text" placeholder="Buscar...">
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss" src="./homeView.scss" />

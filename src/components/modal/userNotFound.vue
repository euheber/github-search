<template>
    <div class="modal-container" v-if="modal">
        <div class="modal">
            <img src="/icons/alert.svg" alt="Ícone de alerta">

            <div class="info">
                <h1>Desculpe!</h1>

                <p>Não foi possível encontrar {{ usuario }} desejado!</p>
            </div>

            <button class="confirmBtn" @click="goToHome">Certo</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const  props = defineProps({ 
    usuario: String
})

let modal = ref(false)

const handleModal = () => {
    modal.value = !modal.value
}

const goToHome = () =>  {
    router.push('/')
}

defineExpose({
    handleModal
})
</script>

<style scoped lang="scss" src="./userNotFound.scss" />

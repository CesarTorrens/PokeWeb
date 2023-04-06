<template>
  <q-page padding>
    <section class="row position-container">
      <div
        class="col-12 col-sm-9 col-md-6 col-lg-4 q-mx-auto rounded-borders login-container q-pa-sm q-py-xl text-center"
      >
        <img
          src="https://w7.pngwing.com/pngs/272/921/png-transparent-pokemon-pokeball-pokemon-go-pokemon-pokeball.png"
          alt="pokebola"
        />
        <h6 class="q-ma-none q-mt-md text-bold">Inicia sesión</h6>
        <div class="input-width">
          <GenericInput
            label="Ingrese su email"
            type="email"
            @inputChange="email = $event"
          />
          <GenericInput
            label="Ingrese su contraseña"
            type="password"
            @inputChange="password = $event"
          />
          <q-btn
            :disable="isLoading || validationButton()"
            :loading="isLoading"
            @click="logIn"
            class="q-mt-lg"
            color="negative"
            label="Iniciar Sesión"
          />
        </div>
        <span class="text-negative q-mt-md" v-show="errorMessage"
          >Sus datos son invalidos</span
        >
        <span class="q-mt-md"
          >No tienes una cuenta?
          <router-link to="/register">Registrate!</router-link></span
        >
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import GenericInput from 'src/components/GenericInput.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/user.store';

const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref(false);
const regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  if (userStore.getUserLog.name) {
    router.push('/');
  }
});

const logIn = () => {
  isLoading.value = true;
  errorMessage.value = false;
  const users = userStore.getUsers;
  const validationUser = users.filter(
    (user) => user.email === email.value && user.password === password.value
  );

  if (validationUser.length > 0) {
    setTimeout(() => {
      userStore.logUser(validationUser[0]);
      isLoading.value = false;
      router.push('/');
    }, 2000);
  } else {
    setTimeout(() => {
      isLoading.value = false;
      errorMessage.value = true;
    }, 2000);
  }
};

const validationButton = () => {
  if (!regexEmail.test(email.value)) return true;
  if (email.value === '' || password.value === '' || isLoading.value) {
    return true;
  }
};
</script>

<style lang="scss">
.position-container {
  height: calc(100vh - 150px);
  align-items: center;
  img {
    border-radius: 100%;
  }
}
.login-container {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: cover;
    width: 50px;
  }
  .input-width {
    width: 70%;
  }
}
</style>

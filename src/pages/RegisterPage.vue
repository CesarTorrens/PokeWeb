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
        <h6 class="q-ma-none q-mt-md text-bold">Registro</h6>
        <div class="input-width">
          <GenericInput
            label="Ingrese su nombre"
            type="text"
            @inputChange="name = $event"
          />
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
            @click="register"
            class="q-mt-lg"
            color="negative"
            label="Registrar"
          />
        </div>
        <span class="text-green q-mt-md" v-show="message">{{ message }}</span>
        <span class="q-mt-md"
          >Ir al <router-link to="/login"> Login!</router-link></span
        >
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import GenericInput from 'src/components/GenericInput.vue';
import { useUserStore } from '../stores/user.store';

const name = ref('');
const email = ref('');
const password = ref('');
const message = ref('');
const isLoading = ref(false);
const regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  if (userStore.getUserLog.name) {
    router.push('/');
  }
});

const register = () => {
  isLoading.value = true;
  userStore.addUser({
    name: name.value,
    email: email.value,
    password: password.value,
    isLogin: false,
  });
  message.value = 'Cuenta creada con exito';
  setTimeout(() => {
    router.push('/login');
  }, 2000);
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

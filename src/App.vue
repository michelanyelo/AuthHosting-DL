<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import { signOut } from "firebase/auth";
import { $auth } from "@/firebaseConfig";

const router = useRouter();

const logout = async () => {
  try {
    await signOut($auth);
    // Redirigir al usuario a la página de inicio de sesión después de cerrar sesión
    router.push({ name: 'login' });
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink :to="{ name: 'signup' }">Signup</RouterLink>
        <RouterLink :to="{ name: 'login' }">Login</RouterLink>
        <!-- Agregar un botón o enlace para cerrar sesión -->
        <a href="#" @click.prevent="logout">Cerrar sesión</a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* Mantén tus estilos anteriores */
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* Estilos adicionales opcionales para el botón de cerrar sesión */
nav a:last-of-type {
  color: red;
  /* Cambia el color del enlace de cerrar sesión */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

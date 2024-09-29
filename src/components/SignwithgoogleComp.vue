<script setup>
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { $auth } from "@/firebaseConfig"
import { useRouter } from 'vue-router'

const router = useRouter()

const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider()
        await signInWithPopup($auth, provider)
        router.push({ name: "home" }); // Redirige a la vista de inicio
    } catch (error) {
        console.error(error)
    }
}
</script>

<template>
    <button class="btn btn-google w-100" @click="signInWithGoogle">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google logo"
            class="google-icon" />
        Sign Up with Google
    </button>
</template>

<style scoped>
.google-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
}

.btn-google {
    background-color: white;
    color: #db4437;
    border: 2px solid #db4437;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-google:hover {
    background-color: #db4437;
    color: white;
}
</style>
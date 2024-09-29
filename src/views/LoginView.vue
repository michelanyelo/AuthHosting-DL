<script setup>
import { ref } from 'vue'
import { $auth } from "@/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"

const email = ref("")
const password = ref("")

const handleLogin = async () => {
    try {
        await signInWithEmailAndPassword($auth, email.value, password.value)
        email.value = ""
        password.value = ""
    } catch (error) {
        console.error(error)
    }
}

</script>

<template>
    <div class="login-container d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 shadow-lg" style="width: 22rem;">
            <h1 class="text-center mb-4">Login</h1>
            <form @submit.prevent="handleLogin">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter your email"
                        required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password"
                        placeholder="Enter your password" required />
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    background: linear-gradient(135deg, #42b883, #35495e);
}

.card {
    background-color: #fff;
    border-radius: 15px;
}

button {
    background-color: #42b883;
    border: none;
    color: white;
}

button:hover {
    background-color: #35495e;
    color: white;
}
</style>
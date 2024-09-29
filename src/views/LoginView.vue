<script setup>
import { ref } from 'vue'
import { $auth } from "@/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from 'vue-router'
import SignwithgoogleComp from "@/components/SignwithgoogleComp.vue"

const email = ref("")
const password = ref("")
const router = useRouter()

const handleLogin = async () => {
    try {
        await signInWithEmailAndPassword($auth, email.value, password.value)
        email.value = ""
        password.value = ""
        router.push({ name: "home" })
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
            <div class="divider mt-3 mb-3 text-center">OR</div>
            <SignwithgoogleComp />
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

.divider {
    display: flex;
    position: relative;
    text-align: center;
}

.divider::before,
.divider::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc;
    margin: 15px;
    height: 1px;
    position: relative;
}
</style>
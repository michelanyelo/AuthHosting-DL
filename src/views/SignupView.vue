<script setup>
import { createUserWithEmailAndPassword } from "firebase/auth"
import { $auth } from "@/firebaseConfig"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SignwithgoogleComp from "@/components/SignwithgoogleComp.vue"

const router = useRouter()
const email = ref("")
const password = ref("")

const handleSignup = async () => {
    try {
        await createUserWithEmailAndPassword($auth, email.value, password.value);
        email.value = "";
        password.value = "";
        router.push({ name: "home" }); // Redirige a la vista de inicio
    } catch (error) {
        console.error(error); // Captura y muestra cualquier error
    }
}

</script>

<template>
    <div class="signup-container d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 shadow-lg" style="width: 22rem;">
            <h1 class="text-center mb-4">Sign Up</h1>
            <form @submit.prevent="handleSignup">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter your email"
                        required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password"
                        placeholder="Create a password" required />
                </div>
                <button type="submit" class="btn btn-primary w-100">Sign Up</button>
            </form>
            <div class="divider mt-3 mb-3 text-center">OR</div>
            <SignwithgoogleComp />
        </div>
    </div>
</template>

<style scoped>
.signup-container {
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

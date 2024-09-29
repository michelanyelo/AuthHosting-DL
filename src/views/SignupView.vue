<script setup>
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { $auth } from "@/firebaseConfig"
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref("")
const password = ref("")

const handleSignup = async () => {
    try {
        await createUserWithEmailAndPassword($auth, email.value, password.value);
        email.value = "";
        password.value = "";
        router.push({ name: "login" }); // Redirige a la vista de inicio de sesión
    } catch (error) {
        console.error(error); // Captura y muestra cualquier error
    }
}

const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider()

        await signInWithPopup($auth, provider)
    } catch (error) {
        console.error(error)
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
            <button class="btn btn-google w-100" @click="signInWithGoogle">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google logo"
                    class="google-icon" />
                Sign Up with Google
            </button>
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
    position: relative;
    text-align: center;
}

.divider::before,
.divider::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc;
    margin: auto;
    width: 45%;
    height: 1px;
    position: relative;
    top: 0.8em;
}

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
    background-color: white;
    color: #db4437;
}
</style>

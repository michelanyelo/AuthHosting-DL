import { onAuthStateChanged } from "firebase/auth";
import { $auth } from "@/firebaseConfig";

// Función simplificada para obtener el estado de autenticación
const getCurrentUser = () =>
    new Promise((resolve) => onAuthStateChanged($auth, resolve));

export const authGuard = async (to, from, next) => {
    const user = await getCurrentUser();

    if (!user) {
        // Si no hay usuario, redirige a la página de registro
        next({ name: 'signup' });
    } else { // Si el usuario está autenticado deja navegar
        next()
    }
};

export const noAuthGuard = async (to, from, next) => {
    const user = await getCurrentUser();

    if (user) {
        // Si ya está autenticado, redirige a home
        next({ name: 'home' });
    } else {
        // Permite la navegación a signup o login
        next();
    }
};

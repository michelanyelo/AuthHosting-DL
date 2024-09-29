import { onAuthStateChanged } from "firebase/auth";
import { $auth } from "@/firebaseConfig";

export const authGuard = (to, from, next) => {
    const unsubscribe = onAuthStateChanged($auth, (user) => {
        if (!user) {
            next({ name: 'signup' });
        } else {
            next(); // Usuario autenticado, permite la navegación
        }
        unsubscribe(); // Desuscribirse para evitar múltiples llamadas
    });
};

export const noAuthGuard = (to, from, next) => {
    const unsubscribe = onAuthStateChanged($auth, (user) => {
        if (user) {
            next({ name: 'home' });
        } else {
            next(); // No hay usuario autenticado, permite la navegación
        }
        unsubscribe(); // Desuscribirse para evitar múltiples llamadas
    });
};

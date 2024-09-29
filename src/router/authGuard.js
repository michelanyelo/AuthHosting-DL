// authGuard.js

import { onAuthStateChanged } from "firebase/auth";
import { $auth } from "@/firebaseConfig";

export const authGuard = (to, from, next) => {
    const unsubscribe = onAuthStateChanged($auth, (user) => {
        if (!user) {
            next({ name: 'signup' });
        } else {
            next(); // Permite la navegación
        }
        unsubscribe(); // Desuscribirse para evitar múltiples llamadas
    });
};

export const noAuthGuard = (to, from, next) => {
    const unsubscribe = onAuthStateChanged($auth, (user) => {
        if (user) {
            next({ name: 'home' }); // Redirige a home si ya está autenticado
        } else {
            next(); // Permite la navegación si no hay usuario autenticado
        }
        unsubscribe(); // Desuscribirse para evitar múltiples llamadas
    });
};

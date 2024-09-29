import { onAuthStateChanged } from "firebase/auth";
import { $auth } from "@/firebaseConfig";

export const authGuard = (to, from, next) => {
    onAuthStateChanged($auth, (user) => {
        if (!user) {
            next({ name: 'signup' });
        } else {
            next();
        }
    })
}
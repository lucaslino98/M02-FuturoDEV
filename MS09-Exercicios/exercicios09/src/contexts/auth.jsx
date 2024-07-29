import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: async () => {},
    signOut: () => {}
});

// Simular uma chamada para a API Dummy JSON
async function apiAuth(credentials) {
    const { username, password } = credentials;
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    if (!response.ok) {
        throw new Error("Autenticação falhou");
    }

    const data = await response.json();
    return data;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStorage = localStorage.getItem('@lab365:userLogged');

        if (userLoggedStorage) {
            return JSON.parse(userLoggedStorage);
        }

        return null;
    });

    async function signIn(data) {
        try {
            const userData = await apiAuth(data);

            const userResponse = {
                id: userData.id,
                first_name: userData.firstName,
                email: userData.email,
                token: userData.token
            };

            setUser(userResponse);
            localStorage.setItem('@lab365:userLogged', JSON.stringify(userResponse));
            localStorage.setItem('@lab365:token', userData.token);
        } catch (error) {
            console.error("Erro na autenticação:", error);
            throw new Error("Email/Senha inválida");
        }
    }

    function signOut() {
        setUser(null);
        localStorage.removeItem('@lab365:userLogged');
        localStorage.removeItem('@lab365:token');
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook para usar o contexto de autenticação
export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

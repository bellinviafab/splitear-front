import { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';


export const AuthContext = createContext();


export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {

        const verificarSesion = async () => {
            try {
                const res = await api.get('/auth/me')
                setUsuario(res.data)
            } catch (error) {
                setUsuario(null)
            } finally {
                setCargando(false)
            }
        }
        verificarSesion();
    }, [])

    return (
        <AuthContext.Provider value={{ usuario, setUsuario, cargando }}>
            {children}
        </AuthContext.Provider>
    );
}


export const useAuth = () => {
    return useContext(AuthContext)
}
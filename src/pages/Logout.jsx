import api from '../services/api';

function Logout() {
    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
        } catch (error) {
            console.warn("No se pudo notificar al servidor, cerrando sesión localmente:", error);
        }
    }

    return (
        <div>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    )
}

export default Logout
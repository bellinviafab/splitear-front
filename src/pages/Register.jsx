import { useState } from 'react';
import api from '../services/api'
import Alert from '../components/Alert'

function Register() {

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        password1: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errorMensaje, setErrorMensaje] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMensaje('')
        if (formData.password !== formData.password1) {
            setErrorMensaje("Las contraseñas no coinciden");
            return;
        }
        const { password1, ...datosUsuario } = formData;
        setIsLoading(true);
        try {
            await api.post('/auth/register', datosUsuario)
        } catch (error) {
            const mensajeError = error.response?.data?.message || "Ocurrió un error al registrarse"
            setErrorMensaje(mensajeError)
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div>
            <h2>Crear Cuenta en Splitear</h2>
            <form onSubmit={handleSubmit}>
                <Alert message={errorMensaje} />
                <div>
                    <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" />
                </div>
                <div>
                    <input name="username" value={formData.username} onChange={handleChange} type="text" placeholder="Nombre de usuario" />
                </div>
                <div>
                    <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Contraseña" />
                </div>
                <div>
                    <input name="password1" value={formData.password1} onChange={handleChange} type="password" placeholder="Confirmar contraseña" />
                    {formData.password1.length > 0 && formData.password !== formData.password1 && (
                        <p style={{ color: 'red' }}>Las contraseñas no coinciden</p>
                    )}
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Register
import Alert from '../components/Alert'
import api from '../services/api'
import { useState } from 'react';

function Login() {

    const [formData, setFormData] = useState({
        identificador: '',
        password: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const [isLoading, setIsLoading] = useState(false)
    const [errorMensaje, setErrorMensaje] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMensaje('')
        setIsLoading(true)
        try {
            await api.post('/auth/login', formData)
        } catch (error) {
            const mensajeError = error.response?.data?.message || "Ocurrió un error al iniciar sesión"
            setErrorMensaje(mensajeError)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <h1>Login:</h1>
            <form onSubmit={handleSubmit}>
                <Alert message={errorMensaje} />
                <div>
                    <input name="identificador" value={formData.identificador} onChange={handleChange} type="text" placeholder="Usuario o Email" />
                </div>
                <div>
                    <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Contraseña" />
                </div>
                <button type="submit" >Iniciar sesión </button>
            </form>
        </div>
    )
}


export default Login
import {useState} from 'react'
import './style.css'
export const AuthPage = () => {

    const [formReg, setFormReg] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
    })

    const [form, setForm] = useState({
        username: '',
        password: ''
    })


    return (
        <div className='div-auth'>
            <div className='div-h2'> 
                <br />
                <div className='cont' id='container'>
                    <div>
                        <div className="form-container sign-in-container">
                            <form action="#" >
                                <h1>Inicia sesión</h1>

                                <div className="social-container">
                                    <a href="#" className="social"></a>
                                    <a href="#" className="social"></a>
                                    <a href="#" className="social"></a>
                                </div>
                                <span>usa tu cuenta personal</span>
                                <input type="text" placeholder="Username" required className='form-input' value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
                                <input type="password" placeholder="Password" required className='form-input' value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                                {/* <a href="#" className='div-a'>Forgot your password?</a> */}

                                <button className='mt-2' >Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1>Hola, Amiguito</h1>
                                <p>Inicia sesión para acceder a las funcionalidades del proyecto </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

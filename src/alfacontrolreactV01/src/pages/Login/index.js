import React, {useState} from "react";
import '../Login/styles.css';
import logoImagem from '../../assets/logo2.png';
import Alfa from '../../assets/ALFACONTROL.png';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';



export default function Login(){

    const[cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function login(event){
        event.preventDefault();

        const data = {
            cpf, senha
        };

        try{
            const response = await api.post('api/usuarios/authenticate',data);

            localStorage.setItem('cpf', cpf);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.expiration);

            history.push('/item');

        }catch(error){
            alert('O login falhou ' + error)
        }
    }


    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImagem} alt="login" id="img1"/>
                <form onSubmit={login}>
                <img src={Alfa} alt="login" id="img2"/>
                    <input placeholder="Cpf"
                    value={cpf}
                    onChange={e=>setCpf(e.target.value)}/>

                    <input type="password" placeholder="Senha"
                    value={senha}
                    onChange={e=>setSenha(e.target.value)}
                    />
                    <button class="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}
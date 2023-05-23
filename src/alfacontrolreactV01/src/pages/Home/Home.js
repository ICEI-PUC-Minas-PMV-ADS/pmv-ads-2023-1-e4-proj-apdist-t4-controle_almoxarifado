import './Home.css'
import * as React from 'react'
import Alfa from '../assets/ALFACONTROL.png'
import logo2 from '../assets/logo2.png'
import relatorios from '../assets/Relatorios.png'
import fornecedores from '../assets/Fornecedores.png'
import Estoque from '../assets/Estoque.png'
import User from '../assets/user.png'
import api from '../Services/api'
import { useState, useEffect } from 'react'
//import { useHistory } from 'react-router-dom'



export default function Home() {


    //   const cpf = localStorage.setItem("cpf")
    //  const token = localStorage.setItem("token")
    //   const history = useHistory();


    //   const authorization = {

    //     headers : {
    //       authorization : `Bearer ${token}`
    //     }
    //   }


    //   async function logout(){

    //     try{

    //         localStorage.clear();
    //         localStorage.setItem('token', '')
    //         authorization.headers ='';
    //         history.pushState('/Login')

    //     }catch(erro){
    //       alert('Não foi possível sair '+ erro)
    //     }
    //   }


    const modal = () => {


    }

    return (

        <div>

            <header>
                <img src={logo2} alt="logo" id="logoHeader" /> <h3>ALFACONTROL</h3>
                <div className="user">
                    <img src={User} alt="logo" id="user" />
                    <p>Usuário</p>
                </div>

            </header>


            <h1>Bem-vindo(a),  !</h1>



            <div className="options">

                <div>
                    <img src={fornecedores} alt="" id="options" title='Forcenedores' onClick={modal} />
                    <Link className="button" to="aluno/novo/0">Novo Aluno</Link>
                </div>

                <div>
                    <img src={Estoque} alt="" id="options" title="Relatórios" />
                </div>

                <div>
                    <img src={relatorios} alt="" id="options" title="Estoque" />
                </div>
            </div>



            <div className="img">
                <div>
                    <img src={logo2} alt="" />
                </div>
                <div>
                    <img src={Alfa} alt="" />
                </div>
            </div>

        </div>


    )
}
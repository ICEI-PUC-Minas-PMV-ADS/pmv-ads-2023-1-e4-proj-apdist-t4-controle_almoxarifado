import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import logoCadastro from './assets/estoque.png'


function App() {
  const baseUrl = "https://localhost:7163/api/itens";
  const [data, setData] = useState([]);

  const [updateData,setUpdateData] = useState(true);

  /*Função para modal*/
  const [modalIncluir, setModalIncluir] = useState(false)//Parte 01 Modal Codigo 002

  const [modalEditar, setModalEditar] = useState(false) //Metodo Criar editar Modal

  const [modalExcluir, setModalExcluir] = useState(false) //Metodo Criar Excluir Modal

  const [itemSelecionado, setItemSelecionado] = useState(
    {
      id: '',
      descricao: '',
      unidade: '',
      estoqueatual: '',
      marcaproduto: ''
    })

      //-----------Metado Editar e Excluir Modal--
  const selecionarItem = (item, opcao) => {
    setItemSelecionado(item);
    (opcao === "Editar") ?
      abrirFecharModalEditar() : abrirFecharModalExcluir();
  }
  //----------------------------

  const abrirFecharModalIncluir = () => {//Parte 02 Modal Codigo 002
    setModalIncluir(!modalIncluir);
  }

  const abrirFecharModalEditar = () => {//Metodo  Abrir Modal Editar
    setModalEditar(!modalEditar);
  }

  const abrirFecharModalExcluir = () => {//Metodo  Abrir Modal Excluir
    setModalExcluir(!modalExcluir);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setItemSelecionado({
      ...itemSelecionado,
      [name]: value
    });
    console.log(itemSelecionado);
  }
  /*Função para modal*/

  const pedidoGet = async () => {//Parte 03 Modal Codigo 002
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  const pedidoPost = async () => {
    delete itemSelecionado.id;
    itemSelecionado.estoqueatual = parseInt(itemSelecionado.estoqueatual);
    await axios.post(baseUrl, itemSelecionado)
      .then(response => {
        setData(data.concat(response.data));
        setUpdateData(true);
        abrirFecharModalIncluir();
      }).catch(error => {
        console.log(error);
      })
  }

  const pedidoPut = async () => {
    itemSelecionado.estoqueatual = parseInt(itemSelecionado.estoqueatual);
    await axios.put(baseUrl + "/" + itemSelecionado.id, itemSelecionado)
      .then(response => {
        var resposta = response.data;
        var dadosAuxiliar = data;
        dadosAuxiliar.map(item => {
          if (item.id === itemSelecionado.id) {
            item.descricao = resposta.descricao;
            item.unidade = response.unidade;
            item.estoqueAtual = response.estoqueAtual;
            item.marcaProduto = response.marcaProduto;
          }
        });
        setUpdateData(true);
        abrirFecharModalEditar();
      }).catch(error => {
        console.log(error);
      })
  }

  const pedidoDelete = async () => {
    await axios.delete(baseUrl + "/" + itemSelecionado.id)
      .then(response => {
        setData(data.filter(item => item.id !== response.data));
        setUpdateData(true);
        abrirFecharModalExcluir();
      }).catch(error => {
        console.log(error);
      })
  }

  // Atualizar dados apos algum metodo
  useEffect(() => {
    if(updateData){
      pedidoGet();
      setUpdateData(false);
    }
  },[updateData])


  return (
    <div className="item-container">
      <br />
      <h4>Cadastro de Item</h4>
      <header>
        <img src={logoCadastro} alt='Cadastro' />
        <button className="btn btn-success" onClick={() => abrirFecharModalIncluir()}> Novo Item</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descrição</th>
            <th>Unidade</th>
            <th>Estoque Atual</th>
            <th>Marca do Produto</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.descricao}</td>
              <td>{item.unidade}</td>
              <td>{item.estoqueAtual}</td>
              <td>{item.marcaProduto}</td>
              <td>
                <button className="btn btn-primary" onClick={() => selecionarItem(item, "Editar")}>Editar</button> {"  "}
                <button className="btn btn-danger" onClick={() => selecionarItem(item, "Excluir")}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalIncluir}>
        <ModalHeader>Incluir Itens</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Descricao: </label>
            <br />
            <input type="text" className="form-control" name="descricao" onChange={handleChange} />
            <br />
            <label>Unidade: </label>
            <br />
            <input type="text" className="form-control" name="unidade" onChange={handleChange} />
            <br />
            <label>Estoque Atual: </label>
            <br />
            <input type="text" className="form-control" name="estoqueatual" onChange={handleChange} />
            <br />
            <label>Marca do Produto: </label>
            <br />
            <input type="text" className="form-control" name="marcaproduto" onChange={handleChange} />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => pedidoPost()}>Incluir</button> {"  "}
          <button className="btn btn-danger" onClick={() => abrirFecharModalIncluir()}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEditar}>
        <ModalHeader>Editar Itens</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>descricao: </label>
            <br />
            <input type="text" className="form-control" name="descricao" onChange={handleChange} 
             value={itemSelecionado && itemSelecionado.descricao}/>
            <br />
            <label>Unidade: </label>
            <br />
            <input type="text" className="form-control" name="unidade" onChange={handleChange}
            value={itemSelecionado && itemSelecionado.unidade} />
            <br />
            <label>Estoque Atual: </label>
            <br />
            <input type="text" className="form-control" name="estoqueatual" onChange={handleChange} 
            value={itemSelecionado && itemSelecionado.estoqueAtual}/>
            <br />
            <label>Marca do Produto: </label>
            <br />
            <input type="text" className="form-control" name="marcaproduto" onChange={handleChange}
            value={itemSelecionado && itemSelecionado.marcaProduto} />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => pedidoPut()}>Editar</button> {"  "}
          <button className="btn btn-danger" onClick={() => abrirFecharModalEditar()}>Cancelar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalExcluir}>
        <ModalHeader>Excluir Item</ModalHeader>
        <ModalBody>
          Confirmar a exclusão deste item : {itemSelecionado && itemSelecionado.descricao}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => pedidoDelete()}>Sim</button> {"  "}
          <button className="btn btn-danger" onClick={() => abrirFecharModalExcluir()}>Não</button>
        </ModalFooter>
      </Modal>

    </div>
  );
}

export default App;

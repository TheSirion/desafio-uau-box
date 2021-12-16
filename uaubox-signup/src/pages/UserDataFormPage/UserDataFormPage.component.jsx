import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.component';
import Button from "../../components/Button/Button.component";
import Header from '../../components/Header/Header.component';

const UserDataFormPage = () => (
  <>
    <Header>
      <Breadcrumb />
    </Header>
    <main>
      <h1 className='h1'>Você está quase lá!</h1>
      <form>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" />

        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" name="sobrenome" />

        <label htmlFor="cpf">CPF</label>
        <input type="text" name="cpf" />

        <label htmlFor="data-nascimento">Data de nascimento</label>
        <input type="text" name="data-nascimento" />

        <label htmlFor="telefone">Telefone</label>
        <input type="text" name="telefone" />

        <Link to="/"><Button>Voltar</Button></Link>
        <Link to="/checkout"><Button>Continuar</Button></Link>
      </form>
    </main>
  </>
)

export default UserDataFormPage;
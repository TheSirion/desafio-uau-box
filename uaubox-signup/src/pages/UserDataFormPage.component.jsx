import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.component';
import Button from "../components/Button.component";
import Header from '../components/Header.component';

const UserDataFormPage = () => (
  <>
    <Header>
      <Breadcrumb />
    </Header>
    <main className="main">
      <div className="title">
        <h1 className='h1'>Você está quase lá!</h1>
      </div>
      <form className='form'>
        <div className="form__group">
          <div className='form__input-wrapper'>
            <label className="form__input-label" htmlFor="nome">Nome</label>
            <input className="form__input" type="text" name="nome" />
          </div>
          <div className='form__input-wrapper'>
            <label className="form__input-label" htmlFor="sobrenome">Sobrenome</label>
            <input className="form__input" type="text" name="sobrenome" />
          </div>
        </div>

        <div className="form__group">
          <div className='form__input-wrapper'>
            <label className="form__input-label" htmlFor="cpf">CPF</label>
            <input className="form__input" type="text" name="cpf" />
          </div>
          <div className='form__input-wrapper'>
            <label className="form__input-label" htmlFor="data-nascimento">Data de nascimento</label>
            <input className="form__input" type="text" name="data-nascimento" />
          </div>
        </div>

        <div className="form__group">
          <div className='form__input-wrapper'>
            <label className="form__input-label" htmlFor="telefone">Telefone</label>
            <input className="form__input" type="text" name="telefone" />
          </div>
        </div>
      </form>
      <div className="form__buttons">
        <Link className="link" to="/">
          <Button className="btn btn--secondary">Voltar</Button>
        </Link>
        <Link className="link" to="/checkout">
          <Button className="btn btn--primary">Continuar</Button>
        </Link>
      </div>
    </main>
  </>
)

export default UserDataFormPage;
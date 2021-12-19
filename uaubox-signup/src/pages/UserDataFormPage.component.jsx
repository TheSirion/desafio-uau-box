import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.component';
import Button from "../components/Button.component";
import Header from '../components/Header.component';

const UserDataFormPage = () => (
  <>
    <Header>
      <Breadcrumb active={2} />
    </Header>
    <main className="main">
      <div className="title">
        <h1 className="h1">Você está quase lá!</h1>
      </div>
      <form className="form form--user-data d-flex flex-column justify-content-between" noValidate>
        <div className="row g-5 form-group">
          <div className="col">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control form-control-lg" aria-label="Nome" required />
          </div>
          <div className="col">
            <label className="form-label">Sobrenome</label>
            <input type="text" className="form-control form-control-lg" aria-label="Sobrenome" required />
          </div>
        </div>

        <div className="row g-5 form-group">
          <div className="col">
            <label className="form-label">CPF</label>
            <input type="text" minLength={11} maxLength={11} className="form-control form-control-lg" aria-label="CPF" required />
          </div>
          <div className="col">
            <label className="form-label">Data de nascimento</label>
            <input type="date" className="form-control form-control-lg" aria-label="Data de nascimento" required />
          </div>
        </div>

        <div className="row g-5 form-group g-4">
          <div className="col">
            <label className="form-label">Telefone</label>
            <input type="tel" minLength={9} maxLength={11} pattern={/(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/} className="form-control form-control-lg" aria-label="Telefone" required />
          </div>
          <div className="col"></div>
        </div>
      </form>


      <div className="form__buttons row">
        <div className="col">
          <Link className="link" to="/">
            <Button className="btn btn--secondary">Voltar</Button>
          </Link>
        </div>
        <div className="col">
          <Link className="link" to="/checkout">
            <Button className="btn btn--primary">Continuar</Button>
          </Link>
        </div>
      </div>
    </main>
  </>
)

export default UserDataFormPage;
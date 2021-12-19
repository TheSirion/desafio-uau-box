import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.component';
import Button from "../components/Button.component";
import Header from '../components/Header.component';
import Input from "../components/Input.component";
import MaskedInput from '../components/MaskedInput.component';

const UserDataFormPage = () => {
  return (
    <>
      <Header>
        <Breadcrumb active={2} />
      </Header>
      <main className="main">
        <div className="title">
          <h1 className="h1">Você está quase lá!</h1>
        </div>
        <form className="form form__user-data d-flex flex-column justify-content-around">
          <div className="row g-5 mb-4 form-group">
            <div className="col">
              <Input label="Nome" inputType="text" minLength={3} maxLength={50} ariaLabel="Nome" />
            </div>
            <div className="col">
              <Input label="Sobrenome" inputType="text" minLength={3} maxLength={50} ariaLabel="Sobrenome" />
            </div>
          </div>

          <div className="row g-5 mb-4 form-group">
            <div className="col">
              <MaskedInput mask="999.999.999-99" />
            </div>
            <div className="col">
              <label className="form-label">Data de nascimento</label>
              <input type="date" className="form-control" aria-label="Data de nascimento" />
            </div>
          </div>

          <div className="row g-5 form-group mb-4">
            <div className="col-6">
              <MaskedInput mask="(99) 99999-9999" />
            </div>
          </div>

          <div className="form__buttons row">
            <div className="col">
              <Link className="link" to="/">
                <Button className="btn btn--secondary">Voltar</Button>
              </Link>
            </div>
            <div className="col">
              <Link className="link" to="/checkout">
                <Button className="btn btn--primary" type="submit">Continuar</Button>
              </Link>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export default UserDataFormPage;
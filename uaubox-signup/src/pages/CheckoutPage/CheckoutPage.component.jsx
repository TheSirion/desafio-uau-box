import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.component';
import Button from "../../components/Button/Button.component";
import Header from "../../components/Header/Header.component";

const CheckoutPage = () => (
  <>
    <Header>
      <Breadcrumb />
    </Header>
    <div className="title">
      <h1 className="h1">Resumo da compra</h1>
    </div>
    <div className="wrapper">
      <div className="form">
        <div className="form__group">
          <div className="form__input-wrapper">
            <label className="form__input-label" for="cep">CEP</label>
            <input className="form__input" type="text" name="cep" />
            <Button className="btn btn--secondary">Buscar</Button>
          </div>
        </div>
        <div className="form__group">
          <div className="form__input-wrapper">
            <label className="form__input-label" for="endereco">Endereço</label>
            <input className="form__input" type="text" name="endereco" disabled />
          </div>
        </div>
        <div className="form__group">
          <div className="form__input-wrapper">
            <label className="form__input-label" for="numero">Número</label>
            <input className="form__input" type="text" name="cep" />
          </div>
          <div className="form__input-wrapper">
            <label className="form__input-label" for="complemento">Complemento</label>
            <input className="form__input" type="text" name="cep" />
          </div>
        </div>
      </div>
      <div className="subscription">
        <h2>Assinatura de R$89,90</h2>
        <h2>Frete Gratis</h2>
      </div>
    </div>
  </>
)

export default CheckoutPage;
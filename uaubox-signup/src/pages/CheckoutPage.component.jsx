import React from 'react';
import { Link } from 'react-router-dom';
import Box from "../assets/box.png";
import Breadcrumb from '../components/Breadcrumb.component';
import Button from "../components/Button.component";
import Header from "../components/Header.component";

const CheckoutPage = () => (
  <>
    <Header>
      <Breadcrumb />
    </Header>
    <main className="main">
      <div className="title">
        <h1 className="h1">Resumo da compra</h1>
      </div>
      <div className="checkout__wrapper">
        <div className="form">
          <div className="form__group">
            <div className="form__input-wrapper">
              <label className="form__input-label" htmlFor="cep">CEP</label>
              <input className="form__input" type="text" name="cep" />
              <Button className="btn btn--secondary">Buscar</Button>
            </div>
          </div>
          <div className="form__group">
            <div className="form__input-wrapper">
              <label className="form__input-label" htmlFor="endereco">Endereço</label>
              <input className="form__input" type="text" name="endereco" disabled />
            </div>
          </div>
          <div className="form__group">
            <div className="form__input-wrapper">
              <label className="form__input-label" htmlFor="numero">Número</label>
              <input className="form__input" type="text" name="cep" />
            </div>
            <div className="form__input-wrapper">
              <label className="form__input-label" htmlFor="complemento">Complemento</label>
              <input className="form__input" type="text" name="cep" />
            </div>
          </div>
        </div>
        <div className="checkout__subscription">
          <div className="checkout__subscription-price">
            <h1 className="h1">Assinatura de R$89,90</h1>
            <h1 className="h1">Frete Gratis</h1>
          </div>
          <div className="checkout__subscription-box-img">
            <img src={Box} alt="Product box" />
          </div>
        </div>
      </div>
      <div className="form__buttons">
        <Link className='link' to="/">
          <Button className="btn btn--secondary">Voltar</Button>
        </Link>
        <Link className='link' to="/checkout">
          <Button className="btn btn--primary">Finalizar</Button>
        </Link>
      </div>
    </main>
  </>
)

export default CheckoutPage;
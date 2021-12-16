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
          <div className="row input-group">
            <div className="col">
              <label className="form-label">CEP</label>
              <input type="text" className="form-control" aria-label="CEP" />
            </div>
            <div className="col">
              <Button className="btn btn--secondary">Buscar</Button>
            </div>
          </div>

          <div className="row input-group">
            <div className="col">
              <label className="form-label">Endereço</label>
              <input type="text" className="form-control" aria-label="Endereço" disabled />
            </div>
          </div>

          <div className="row input-group">
            <div className="col">
              <label className="form-label">Número</label>
              <input type="number" className="form-control" aria-label="Número" />
            </div>
            <div className="col">
              <label className="form-label">Complemento</label>
              <input type="text" className="form-control" aria-label="Complemento" />
            </div>
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
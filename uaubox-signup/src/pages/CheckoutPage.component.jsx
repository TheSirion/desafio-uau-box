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
          <div className="row form-group d-flex justify-content-center align-items-end">
            <div className="col">
              <label className="form-label">CEP</label>
              <input type="text" className="form-control" aria-label="CEP" />
            </div>
            <div className="col">
              {/* <label className="form-label">A</label> */}
              <Button className="btn btn--secondary">Buscar</Button>
            </div>
          </div>

          <div className="row form-group">
            <div className="col">
              <label className="form-label">Endereço</label>
              <input type="text" className="form-control" aria-label="Endereço" disabled />
            </div>
          </div>

          <div className="row form-group">
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

        <div className="checkout__subscription">
          <div className="checkout__subscription-price d-flex flex-column justify-content-around">
            <h1 className="h1">Assinatura de R$89,90</h1>
            <h1 className="h1">Frete Grátis</h1>
          </div>
          <div className="checkout__subscription-box-img">
            <img src={Box} alt="Product box" />
          </div>
        </div>
        <div className="checkout__subscription-selection">
          <select className="form-select" aria-label="Subscription selection">
            <option value="mensal" selected>Assinatura mensal – R$89,90/mês</option>
            <option value="trimestral">Assinatura trimestral – R$79,90/mês</option>
            <option value="semestral">Assinatura semestral – R$74,90/mês</option>
            <option value="anual">Assinatura anual – R$69,90/mês</option>
          </select>
        </div>
      </div>

      <div className="form__buttons">
        <div className="row">
          <div className="col">
            <Link className="link" to="/">
              <Button className="btn btn--secondary">Voltar</Button>
            </Link>
          </div>
          <div className="col">
            <Link className="link" to="/checkout">
              <Button className="btn btn--primary btn--search">Finalizar</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  </>
)

export default CheckoutPage;
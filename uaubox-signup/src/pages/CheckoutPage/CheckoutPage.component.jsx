import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.component';
import Button from "../../components/Button/Button.component";
import Header from "../../components/Header/Header.component";

const CheckoutPage = () => (
  <>
    <Header>
      <Breadcrumb />
    </Header>
    <h1>Resumo da compra</h1>
    <div className="wrapper">
      <div className="form">
        <div className="form__group">
          <label for="cep">CEP</label>
          <input type="text" name="cep" />
          <Button>Buscar</Button>
        </div>
        <div className="form__group">
          <label for="endereco">Endereço</label>
          <input type="text" name="endereco" disabled />
        </div>
        <div className="form__group">
          <label for="numero">Número</label>
          <input type="text" name="cep" />
          <label for="complemento">Complemento</label>
          <input type="text" name="cep" />
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
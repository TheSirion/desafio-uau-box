import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from "../assets/box.png";
import Breadcrumb from '../components/Breadcrumb.component';
import Button from "../components/Button.component";
import Header from "../components/Header.component";
import { fetchAddress } from '../utils/BrasilApi';

const CheckoutPage = () => {
  const [address, setAddress] = useState({});
  const [cepInput, setCepInput] = useState("");
  const [fetchedAdress, setFetchedAddress] = useState("Pesquise o CEP");

  const handleChange = event => {
    setCepInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAddress(fetchAddress(cepInput));
    console.log("address var: ", address);
    setFetchedAddress(address.city);
    console.log(fetchedAdress)
  }

  return (
    <>
      <Header>
        <Breadcrumb active={3} />
      </Header>
      <main className="main">
        <div className="title">
          <h1 className="h1">Resumo da compra</h1>
        </div>
        <div className="checkout__wrapper">
          <form className="form checkout__form d-flex flex-column justify-content-between" onSubmit={handleSubmit}>
            <div className="row form-group d-flex justify-content-center align-items-end">
              <div className="col">
                <label className="form-label">CEP</label>
                <input type="text" className="form-control" aria-label="CEP" onChange={handleChange} />
              </div>
              <div className="col">
                <Button className="btn btn--secondary">Buscar</Button>
              </div>
            </div>

            <div className="row form-group">
              <div className="col">
                <label className="form-label">Endereço</label>
                <input type="text" className="form-control" aria-label="Endereço" value={fetchedAdress} disabled />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-3">
                <label className="form-label">Número</label>
                <input type="number" min={1} max={99999} className="form-control" aria-label="Número" />
              </div>
              <div className="col-9">
                <label className="form-label">Complemento</label>
                <input type="text" maxLength={50} className="form-control" aria-label="Complemento" />
              </div>
            </div>
          </form>

          <div className="checkout__subscription">
            <div className="checkout__subscription-price">
              <h1 className="h1 mt-4 mb-5">Assinatura R$89,90</h1>
              <h1 className="h1">Frete Grátis</h1>
            </div>
            <div className="checkout__subscription-box">
              <img src={Box} alt="Product box" />
            </div>
            <div className="checkout__subscription-selection d-flex align-items-end">
              <select className="form-select" defaultValue={"mensal"} aria-label="Subscription selection">
                <option value="mensal">Assinatura mensal – R$89,90/mês</option>
                <option value="trimestral">Assinatura trimestral – R$79,90/mês</option>
                <option value="semestral">Assinatura semestral – R$74,90/mês</option>
                <option value="anual">Assinatura anual – R$69,90/mês</option>
              </select>
            </div>
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
}

export default CheckoutPage;
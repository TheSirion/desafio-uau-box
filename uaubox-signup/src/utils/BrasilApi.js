const BrasilApi = "https://brasilapi.com.br/api";

const fetchAddress = async cep => {
  // const data = fetch(`${BrasilApi}/cep/v2/${cep}`)
  //   .then(response => JSON.parse(response))
  //   .then(data => console.log(data));
  const data = await fetch(`${BrasilApi}/cep/v2/${cep}`, {mode: "cors"})
  await console.log(data);

  return data;
};

export { fetchAddress };

const BrasilApi = "https://brasilapi.com.br/api";

const fetchAddress = async cep => {
  const apiResponse = await fetch(`${BrasilApi}/cep/v2/${cep}`);
  const data = await apiResponse.json();

  const { street, neighborhood, city, state } = data;
  console.log("fetched: ", data);
  return (
    { street, neighborhood, city, state } || { message: "CEP não encontrado" }
  );
};

export { fetchAddress };

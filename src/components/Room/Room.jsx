import { getAPI } from "@api";
import { useState, useEffect } from "react";
import { ProductTooltip } from "@components/index";
import styled from "styled-components";

const ProductList = ({ item }) => {
  const { productList } = item;
  console.log(productList);

  const products = productList.map((product) => {
    return (
      <Item key={product.productId}>
        <ProductTooltip
          id={product.productId}
          name={product.productName}
          imageUrl={product.imageUrl}
          outside={product.outside}
          priceDiscount={product.priceDiscount}
          discountRate={product.discountRate}
        />
      </Item>
    );
  });

  return products;
};

const Item = styled.div``;

const Room = () => {
  const [item, setItem] = useState({
    id: 0,
    imageUrl: "",
    productList: [],
  });

  console.log(item);

  useEffect(() => {
    const getData = async () => {
      const { id, imageUrl, productList } = await getAPI();
      // const list = productList.map((product) => ({
      //   ...product,
      //   selected: false,
      // }));
      setItem({ id, imageUrl, productList });
    };
    getData();
  }, []);
  return (
    <Roombox>
      <ProductList item={item} />
    </Roombox>
  );
};

const Roombox = styled.div`
  width: 100%;
  height: 100%;
`;

export default Room;

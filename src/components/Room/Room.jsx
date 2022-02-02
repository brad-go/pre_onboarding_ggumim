import { getAPI } from "@api";
import { useState, useEffect } from "react";
import { ProductList } from "@components/index";
import styled from "styled-components";

const Room = () => {
  const [item, setItem] = useState({
    id: 0,
    imageUrl: "",
    productList: [],
  });

  const handleTagSelect = (e) => {
    const itemId = e.target.id;
    setItem((prev) => ({
      ...prev,
      productList: prev.productList.map((product) =>
        product.productId === Number(itemId)
          ? { ...product, selected: !product.selected }
          : { ...product, selected: false }
      ),
    }));
  };

  useEffect(() => {
    const getData = async () => {
      const { id, imageUrl, productList } = await getAPI();
      const list = productList.map((product) => ({
        ...product,
        selected: false,
      }));
      setItem({ id, imageUrl, productList: list });
    };
    getData();
  }, []);

  return (
    <Roombox>
      <ProductList item={item} onClick={handleTagSelect} />
    </Roombox>
  );
};

const Roombox = styled.div`
  width: 100%;
  height: 100%;
`;

export default Room;

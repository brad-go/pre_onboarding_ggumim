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
      const list = productList.reverse().map((product) => ({
        ...product,
        selected: false,
      }));
      setItem({ id, imageUrl, productList: list });
    };
    getData();
  }, []);

  return (
    <RoomContainer>
      <RoomWrapper>
        <RoomImg src={item.imageUrl} alt="" />
        <ProductList item={item} onClick={handleTagSelect} />
      </RoomWrapper>
    </RoomContainer>
  );
};

const RoomContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 40px 0;
  font-size: 0;
  box-sizing: border-box;
`;

const RoomWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const RoomImg = styled.img`
  width: 800px;
`;

export default Room;

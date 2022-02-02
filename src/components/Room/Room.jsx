import { getAPI } from "@api";
import { useState, useEffect } from "react";
import { TooltipList } from "@components/ProductTooltip/index";
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

  const handleTagSelectReset = (e) => {
    setItem((prev) => ({
      ...prev,
      productList: prev.productList.map((product) => ({
        ...product,
        selected: false,
      })),
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
        <RoomImg
          src={item.imageUrl}
          alt="방사진"
          onClick={handleTagSelectReset}
        />
        <TooltipList item={item} onClick={handleTagSelect} />
      </RoomWrapper>
      <RoomSwiper></RoomSwiper>
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

const RoomSwiper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 0 10px;
  // touch-action: pan-y;
`;

export default Room;

import { useState, useEffect } from "react";
import { getAPI } from "@api";
import { TooltipList } from "@components/ProductTooltip/index";
import { Swiper } from "@components/ProductSwiper/index";
import styled from "styled-components";

const Room = () => {
  const [data, setData] = useState({
    id: 0,
    imageUrl: "",
    productList: [],
  });

  const handleProductSelect = (e) => {
    const itemId = e.target.id;
    setData((prev) => ({
      ...prev,
      productList: prev.productList.map((product) =>
        product.productId === Number(itemId)
          ? { ...product, selected: !product.selected }
          : { ...product, selected: false }
      ),
    }));
  };

  const handleProductSelectReset = () => {
    setData((prev) => ({
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
      const attr = productList.reverse().map((product) => ({
        ...product,
        selected: false,
      }));
      setData({ id, imageUrl, productList: attr });
    };
    getData();
  }, []);

  return (
    <RoomContainer>
      <RoomWrapper>
        <RoomImg
          src={data.imageUrl}
          alt="방사진"
          onClick={handleProductSelectReset}
        />
        <TooltipList
          productList={data.productList}
          onClick={handleProductSelect}
        />
      </RoomWrapper>
      <RoomSwiper>
        <Swiper productList={data.productList} onClick={handleProductSelect} />
      </RoomSwiper>
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
  touch-action: pan-y;
`;

export default Room;

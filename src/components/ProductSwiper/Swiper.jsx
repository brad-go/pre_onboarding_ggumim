import { useState, useRef } from "react";
import { extractOnlyNumbers } from "@utils/functions";
import SwiperList from "./SwiperList";
import styled from "styled-components";

const Swiper = ({ productList, onClick }) => {
  const initialPos = [];
  const swiperRef = useRef(null);

  const [isDrag, setIsDrag] = useState(false);
  const [posX, setPosX] = useState(initialPos);

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const onDragEnd = () => {
    setIsDrag(false);

    const distance = extractOnlyNumbers(swiperRef.current.style.transform);
    swiperRef.current.style.transform = `translateX(${
      distance < 0 ? -50 : 0
    }px)`;

    setPosX(initialPos);
  };

  const onDragMove = (e) => {
    setPosX([...posX, e.clientX]);
    const startX = posX.shift();
    const endX = posX.pop();
    const distance = startX - endX;

    if (isDrag) {
      distance >= 0
        ? (swiperRef.current.style.transform = `translateX(-${distance}px)`)
        : (swiperRef.current.style.transform = `translateX(${-distance}px)`);
    }
  };

  return (
    <SwiperWrapper
      ref={swiperRef}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onMouseMove={isDrag ? onDragMove : null}
    >
      <SwiperList productList={productList} onClick={onClick} />
    </SwiperWrapper>
  );
};

const SwiperWrapper = styled.div`
  position: relative;
  display: flex;
  aling-items: center;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  transition-property: transform;
  transition-duration: 300ms;
  z-index: 1;
`;

export default Swiper;

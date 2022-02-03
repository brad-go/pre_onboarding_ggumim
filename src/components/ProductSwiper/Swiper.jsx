import { useState, useRef } from "react";
import SwiperList from "./SwiperList";
import styled from "styled-components";

const Swiper = ({ item, onClick }) => {
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
    // swiperRef 의 이동된 거리 구하기
    const distance = swiperRef.current.style.transform.replace(
      /[^-?0-9]/g,
      " "
    );

    // 왼쪽이나 오른쪽으로 너무 넘어가지 못하도록 마우스를 뗐을 때 위치 되돌리기
    if (distance < 0) {
      swiperRef.current.style.transform = `translateX(-50px)`;
    } else {
      swiperRef.current.style.transform = `translateX(0px)`;
    }

    // swiperRef의 저장된 위치와 초기화
    setPosX(initialPos);
  };

  const onDragMove = (e) => {
    // 드래그 시작점과 마지막점을 입력받고 시작점에서 마지막점을 빼서 거리를 구함
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
      // 클릭 여부와 상관없이 요소 위에만 위치하면 발생하는 걸 방지하기 위해 작성
      // onMouseMove={isDrag && onDragMove}로 작성하면 동작은 하지만 오류 발생
      onMouseMove={isDrag ? onDragMove : null}
      // onMouseMove={isDrag && onDragMove}
    >
      <SwiperList item={item} onClick={onClick} />
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

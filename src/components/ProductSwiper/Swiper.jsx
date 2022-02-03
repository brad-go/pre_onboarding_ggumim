import { useState, useRef, useEffect } from "react";
import { BADGE_IMG } from "@utils/constants";
import styled, { css } from "styled-components";

const SwiperList = ({ item, onClick }) => {
  const swiperItems = item.map((swiperItem) => {
    const { productId, imageUrl, selected, discountRate } = swiperItem;

    return (
      <SwiperItem
        key={productId}
        id={productId}
        selected={selected}
        onClick={onClick}
      >
        <SwiperItemImg imageUrl={imageUrl}>
          {discountRate && <Badge>{discountRate}%</Badge>}
        </SwiperItemImg>
      </SwiperItem>
    );
  });

  return swiperItems;
};

const Swiper = ({ item, onClick }) => {
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const swiperRef = useRef(null);

  const onDragStart = (e) => {
    // 요소가 선택되는 것 방지
    e.preventDefault();
    setIsDrag(true);
    // 현재 클릭한 page의 위치 + 움직인 스크롤의 길이
    // 스크롤이 이동된 상태에서 클릭 시, 브라우저 width의 pageX값이 설정되어
    // 순간적으로 앞쪽으로 스크롤 되는 것을 방지하기 위해 scrollLeft값을 더해 현재 x의 위치 계산
    // element.scrollLeft : 콘텐츠가 왼쪽 가장자리에서 스크롤되는 픽셀 수를 가져오거나 설정
    setStartX(e.pageX + swiperRef.current.scrollLeft);
  };

  const onDragEnd = (e) => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      swiperRef.current.scrollLeft = startX - e.pageX;
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
  overflow-x: hidden;
  z-index: 1;
`;

const SwiperItem = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
      margin: 26px 4px;
      padding: 2px;
      border-radius: 18px;
    `}
`;

const SwiperItemImg = styled.div`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
  pointer-events: none;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  backgroun-repeat: no-repeat;
`;

const Badge = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background-image: url(${BADGE_IMG});
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;

export default Swiper;

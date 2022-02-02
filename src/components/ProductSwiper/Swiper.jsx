import styled, { css } from "styled-components";

const Swiper = ({ item }) => {
  const swiperItems = item.map((swiperItem) => {
    const { productId, imageUrl, selected } = swiperItem;
    console.log(productId, imageUrl, selected);
    return (
      <SwiperItem selected={selected}>
        <ItemImg imageUrl={imageUrl}></ItemImg>
      </SwiperItem>
    );
  });
  return <SwiperWrapper>{swiperItems}</SwiperWrapper>;
};

const SwiperWrapper = styled.div`
  position: relative;
  display: flex;
  aling-items: center;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  transition-property: transform;
  z-index: 1;
`;

const SwiperItem = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
  ${(props) => {
    props.selected &&
      css`
        background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
        margin: 26px 4px;
        padding: 2px;
        border-radius: 18px;
      `;
  }}
`;

const ItemImg = styled.div`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  backgroun-repeat: no-repeat;
`;

export default Swiper;

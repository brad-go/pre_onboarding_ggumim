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

export default SwiperList;

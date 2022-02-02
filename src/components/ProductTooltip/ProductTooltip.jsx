import { numberWithCommas } from "@utils/constants";
import styled from "styled-components";

const ProductTooltip = ({
  id,
  imageUrl,
  name,
  outside,
  discountRate,
  priceDiscount,
}) => {
  return (
    <Tooltip id={id}>
      <ProductImg style={{ backgroundImage: `url(${imageUrl})` }} />
      <ProductInfo>
        <FurnitureName>{name}</FurnitureName>
        <FurniturePrice>
          <PriceDiscount>
            {outside ? (
              <ExpectedPriceLabel>예상가</ExpectedPriceLabel>
            ) : (
              <DiscountRate>{discountRate + "%"}</DiscountRate>
            )}
            {numberWithCommas(priceDiscount)}
          </PriceDiscount>
        </FurniturePrice>
      </ProductInfo>
      <MoveIconWrapper>
        <MoveIcon
          src="//cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
          alt="상품보기"
        />
      </MoveIconWrapper>
    </Tooltip>
  );
};

const Tooltip = styled.div`
  position: absolute;
  top: 28px;
  left: -20px;
  display: flex;
  align-items: center;
  width: 220px;
  height: 86px;
  margin-top: 16px;
  padding: 8px 0 8px 8px;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  &:before {
    content: "";
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;

const ProductImg = styled.div`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const ProductInfo = styled.div`
  display: flex;
  // flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: left;
  letter-spacing: 0.5px;
`;

const FurnitureName = styled.div`
  width: 100%;
  color: #333c45;
  line-height: 1.3em;
  overflow: hidden;
`;

const FurniturePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-size: 16px;
  line-height: 1.2em !important;
`;

const ExpectedPriceLabel = styled.span`
  color: #898f94;
  font-size: 11px;
  line-height: 11px;
  font-weight: bold;
  margin-right: 4px;
`;

const PriceDiscount = styled.span`
  display: flex;
  align-items: center;
  color: #181d1f;
  line-height: 16px;
  font-weight: bold;
`;

const DiscountRate = styled.span`
  color: #ff585d;
  margin-right: 4px;
`;

const MoveIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

const MoveIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export default ProductTooltip;
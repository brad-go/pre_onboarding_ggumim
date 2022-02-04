import { Tooltip } from "@components/ProductTooltip/index.js";
import { TAG_ICON, TAG_ICON_CLOSE } from "@utils/constants";
import styled from "styled-components";

const TooltipList = ({ productList, onClick }) => {
  const products = productList.map((product) => {
    const {
      productId,
      productName,
      imageUrl,
      outside,
      priceDiscount,
      discountRate,
      pointX,
      pointY,
      selected,
    } = product;

    const posX = pointX * 1.6;
    const posY = pointY * 1.7;

    return (
      <ProductTag
        key={productId}
        id={productId}
        pointX={posX}
        pointY={productId === 127757 ? posY * 0.96 : posY}
        onClick={onClick}
      >
        <TagImg src={selected ? TAG_ICON : TAG_ICON_CLOSE} />
        {selected && (
          <Tooltip
            id={productId}
            name={productName}
            imageUrl={imageUrl}
            outside={outside}
            pointX={posX}
            pointY={posY}
            priceDiscount={priceDiscount}
            discountRate={discountRate}
          />
        )}
      </ProductTag>
    );
  });

  return products;
};

const ProductTag = styled.div`
  position: absolute;
  top: ${(props) => props.pointX}px;
  left: ${(props) => props.pointY}px;
  display: block;
  cursor: pointer;
  z-index: 100;
`;

const TagImg = styled.img`
  width: 32px;
  height: 32px;
  pointer-events: none;
`;

export default TooltipList;

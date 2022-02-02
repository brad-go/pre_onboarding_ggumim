import { Tooltip } from "@components/ProductTooltip/index.js";
import styled from "styled-components";
import { TAG_ICON, TAG_ICON_CLOSE } from "@utils/constants";

const TooltipList = ({ item, onClick }) => {
  const { productList } = item;

  const products = productList.map((product) => {
    const { pointX, pointY, selected } = product;
    const posX = pointX * 1.6;
    const posY = pointY * 1.7;

    return (
      <ProductTag
        key={product.productId}
        id={product.productId}
        pointX={posX}
        pointY={product.productId === 127757 ? posY * 0.96 : posY}
        onClick={onClick}
      >
        <TagImg src={selected ? TAG_ICON : TAG_ICON_CLOSE} />
        {selected && (
          <Tooltip
            id={product.productId}
            name={product.productName}
            imageUrl={product.imageUrl}
            outside={product.outside}
            pointX={posX}
            pointY={posY}
            priceDiscount={product.priceDiscount}
            discountRate={product.discountRate}
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

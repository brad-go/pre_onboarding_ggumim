import { ProductTooltip } from "@components/index.js";
import styled from "styled-components";

const ProductList = ({ item, onClick }) => {
  const { productList } = item;
  console.log(productList);

  const products = productList.map((product) => {
    const { pointX, pointY, selected } = product;
    const posX = pointX * 1.6;
    const posY = pointY * 1.7;

    return (
      <Product
        key={product.productId}
        id={product.productId}
        pointX={posX}
        pointY={product.productId === 127757 ? posY * 0.96 : posY}
        onClick={onClick}
      >
        <TagImg
          src={
            selected
              ? "//cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png"
              : "//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
          }
          width="32"
          height="32"
        />
        {selected && (
          <ProductTooltip
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
      </Product>
    );
  });

  return products;
};

const Product = styled.div`
  position: absolute;
  top: ${(props) => props.pointX}px;
  left: ${(props) => props.pointY}px;
`;

const TagImg = styled.img`
  pointer-events: none;
`;

export default ProductList;

import { ProductTooltip } from "@components/index.js";
import styled from "styled-components";

const ProductList = ({ item, onClick }) => {
  const { productList } = item;

  const products = productList.map((product) => {
    const { pointX, pointY, selected } = product;

    return (
      <Product
        key={product.productId}
        id={product.productId}
        pointX={pointX}
        pointY={pointY}
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
  top: ${(props) => props.pointY}px;
  left: ${(props) => props.pointX}px;
`;

const TagImg = styled.img`
  pointer-events: none;
`;

export default ProductList;

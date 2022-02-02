import { getAPI } from "@api";
import { useState, useEffect } from "react";
import { ProductTooltip } from "@components/index";
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

const Room = () => {
  const [item, setItem] = useState({
    id: 0,
    imageUrl: "",
    productList: [],
  });

  const handleTagSelect = (e) => {
    const itemId = e.target.id;
    setItem((prev) => ({
      ...prev,
      productList: prev.productList.map((product) =>
        product.productId === Number(itemId)
          ? { ...product, selected: !product.selected }
          : { ...product, selected: false }
      ),
    }));
  };

  useEffect(() => {
    const getData = async () => {
      const { id, imageUrl, productList } = await getAPI();
      const list = productList.map((product) => ({
        ...product,
        selected: false,
      }));
      setItem({ id, imageUrl, productList: list });
    };
    getData();
  }, []);
  return (
    <Roombox>
      <ProductList item={item} onClick={handleTagSelect} />
    </Roombox>
  );
};

const Roombox = styled.div`
  width: 100%;
  height: 100%;
`;

export default Room;

import React from "react";
import numeral from 'numeral';
import styled from 'styled-components'

const PorductContenier = styled.li`
  width: 100%;
  min-height: 375px;
  margin: 7.5px auto;
  border: 1px solid transparent;
  text-align: center;
  background: #fff;
  vertical-align: top;
  position: relative;
  display: inline-block;

  a {
    text-decoration: none;
  }

  a:link {
    color: #383838;
  }

  a:visited {
    color: #383838;
  }

  a:hover {
    color: #383838;
  }

  a:active {
    color: #383838;
  }
  .pro-img {
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    padding-left: 0;
    padding-right: 0;
    cursor: pointer;
    background-image: url('${props => props.imageUrl}');
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
    background-size: contain;
  }
  .sale-price {
    font-size: 32px;
    position: relative;
    height: 28px;
    color: #ca3575;
    display: inline-block;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .product-name {
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
    padding: 0 10px;
    height: 40px;
    line-height: 20px;
  }
`;

const Product = ({ product }) => {
  return (
    <PorductContenier imageUrl={product.productImageUrl}>
        <a data-nununi-product-id={product.productId} href={product.url}>
          <div className="pro-img" alt={product.productName}>
          </div>
          <div className="product-name">{product.productName}</div>
            <span className="sale-price">{numeral(product.productPrice).format('$0,0')}</span>
        </a>
    </PorductContenier>
  )
}
export default Product;

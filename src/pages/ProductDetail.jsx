import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";
import { DetailComponent } from "../components/productdetail/DetailComponent";
import { Loading } from "../components/Loading";

export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  console.log(productDetail, "productDetail");
  return (
    <div>
      {productDetailStatus === "LOADING" ? (
        <Loading />
      ) : (
        <DetailComponent productDetail={productDetail} />
      )}
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import ProductInfo from '../../components/client/ProductInfo';
import RelatedProducts from '../../components/client/RelatedProducts';
import TopMenu from '../../components/client/TopMenu';
import CartContainer from '../../containers/CartContainer';
import * as ProductServices from '../../services/productServices';
import '../../styles/client/pages/ProductDetail.scss';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const {
        data: { data: productData },
      } = await ProductServices.getProductBySlug('lime');
      document.title = `${productData.title} - PickBazar`;
      setProduct(productData);
    };
    getProduct();
  }, []);

  return (
    <div className='product-detail'>
      <TopMenu isHome={false} />
      <div className='product-info-container'>
        {product && <ProductInfo product={product} />}
      </div>
      <div className='related-products-container'>
        {product && <RelatedProducts category={product.categories[1]} />}
      </div>
      <CartContainer />
    </div>
  );
}

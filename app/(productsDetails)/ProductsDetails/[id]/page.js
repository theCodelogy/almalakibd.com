import ProductSpecation from '@/Components/ProductSpecation/ProductSpecation';
import ProductDetalis from '@/Components/ProductsDetails/ProductDetalis';
import RelatedProducts from '@/Components/RelatedProducts/RelatedProducts';
import React from 'react';

const page = () => {
  return (
    <div>
      <ProductDetalis/>
      <RelatedProducts/>
      <ProductSpecation/>
      
    </div>
  );
};

export default page;
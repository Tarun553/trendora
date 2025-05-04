import sampleData from '@/db/sample-data';
import ProductList from '@/components/shared/product/product-list';
const Homepage = () => {
  
  return (
    <div>
      <ProductList data={sampleData.products} title="New Arrivals" />
      
    </div>
  )
}

export default Homepage
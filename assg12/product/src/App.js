import { Product } from './components/product/Product';
import ProductForm from './components/product-form/ProductForm'
import {useState} from 'react';

function App() {
  const [products,setProduct] =useState([
    {
      product_name:'DELL XPC 17',
      product_image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSB1oUxyABI9CKC_5lscfWNbsecu4JHibS4yg4MMKfP3Rufde9OwEh1SkzF092Bcbjkn6gv5hy9EcHAqhZBXIrPBKazLiYTlZa0dx579H6nuH4RypYqmyIn_A&usqp=CAE",
      product_price:"Price: 350000/-"
    },
    {
      product_name:'Nike AIR Jordan 7 RETRO OC',
      product_image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvabBzvmGZp7hauIQl7bmfnWy1ElAxH0-rAEe2pLJ5-EGHTSwiliWz8OMPIJepNssieE656wveKVbJ932VoQQ5N24dr1n4B5iHf8N-lRxXyQlCEhqDXNMB3D4&usqp=CAE",
      product_price:"Price: 17000/-"
    },
    {
      product_name:'Jacon & Co. Astromania',
      product_image:"https://i.ytimg.com/vi/MnND5Jr9NcY/maxresdefault.jpg",
      product_price:"Price: 65000000/-"
    },
    {
      product_name:'SAMSUNG GALAXY FOLD 3',
      product_image:"https://images.moneycontrol.com/static-mcnews/2021/08/Samsung-Galaxy-Z-Fold-3-5G.jpg",
      product_price:"Price: 130000/-"
    },
  ]);
  const addNewProductHandler=(product)=>{
    const productObj = {
      product_name:product.productName,
      product_price:product.productPrice,
      product_image:product.productImage
    }
    setProduct([...products,productObj]);
  }
  return (
    <div className="App">

      <ProductForm onProductAdded ={addNewProductHandler}/>
      <h1>List Products</h1>
      {products.map((product,index) =>
      <Product key = {index} pname = {product.product_name} 
      pimage = {product.product_image} 
      pprice = {'₹'+product.product_price}/>
    )}
    </div>
  )
}
export default App;

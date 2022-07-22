import { Product } from './components/Product'
function App() {
  const product_arr = [
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
    }
  ]

  return (
    <div className="App">
      <h1>List of Products</h1>
      <Product pname={product_arr[0].product_name} pimage={product_arr[0].product_image} price={product_arr[0].product_price}/>
      <Product pname={product_arr[1].product_name} pimage={product_arr[1].product_image} price={product_arr[1].product_price}/>
      <Product pname={product_arr[2].product_name} pimage={product_arr[2].product_image} price={product_arr[2].product_price}/>
    </div>
  );
}

export default App;
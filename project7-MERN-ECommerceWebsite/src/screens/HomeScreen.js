import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import './ProductScreen';

// Components
import Product from "../components/Product";
import Slider from "../components/Slider";
import Youtube from "../components/youtube";
import Testmionels from "../components/TestimonialsPage";
import Footer from "../components/footer";
 import Services from "../components/Service";


//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import Service from "../components/Service";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

//  const usertoken=JSON.parse(localStorage.getItem('authToken'));



  
  return (
    <div>
       <Slider/>
    <div className="homescreen">

   <h2 className="homescreen__title "  id="bottom">Distinctive artistic paintings </h2> 
  
  <div className="homescreen__products" >
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
            
          ))
        )}
      </div>
     
    </div>
   <Youtube/>
   <Services/>
   <Testmionels/>
   <Footer/>
    </div>
  );
};

export default HomeScreen;

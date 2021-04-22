import { useParams } from "react-router";
import { getProduct } from "../utils/API";
import React, {useEffect} from "react"
import HotCards from "../components/HotCards/HotCards";




const ProductPage = () => {
    const {id} = useParams();

    useEffect(() => {
        getProduct(id)
        .then(product => console.log(product.data))
        
    }, [id])

    console.log(id)
    return (
        <>
      
        </>
    )
}
export default ProductPage;
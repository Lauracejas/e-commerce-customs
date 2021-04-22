import { useParams } from "react-router";
import { getProduct } from "../utils/API";
import {useEffect} from "react"
const ProductPage = () => {
    const {id} = useParams();

    useEffect(() => {
        getProduct(id)
        .then(product => console.log(product))
        
    }, [id])

    console.log(id)
    return (
        <>
        
        </>
    )
}
export default ProductPage;
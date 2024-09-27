import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Product } from "./Product";
import { featchProducts } from "../features/productSlice";
import { calculateTotalofProducts } from "../utils/utils";


const List = () =>{
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(featchProducts());
    }, [dispatch]);


    const totalOfProducts = calculateTotalofProducts(products)


    return (<div>
        <h1>List will be here</h1>
        <h2>Total = {totalOfProducts}</h2>
        {products.map((product) => (
            <Product {...product}/>
        ))}
    </div>
    );
}
export default List;
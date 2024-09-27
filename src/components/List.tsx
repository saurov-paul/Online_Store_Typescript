import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Product } from "./Product";
import { featchProducts } from "../features/productSlice";


const List = () =>{
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(featchProducts());
    }, [dispatch]);


    return (<div>
        <h1>Products</h1>
        {products.map((product) => (
            <Product {...product}/>
        ))}
    </div>
    );
}
export default List;
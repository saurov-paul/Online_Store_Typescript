
import { Product } from "../features/productSlice";


export const calculateTotalofProducts = (products: Product[]) => {

    // This tells typescript that total is always a number

    let total: number = 0;
    products.forEach((product) => {
        total += product.price 
    })

    return parseFloat(total.toFixed(2));


}

export const reverseStringFunction =(string: string) => {
    return string.split("").reverse().join("").toUpperCase();
}

console.log(reverseStringFunction("Hello"))
import { useEffect, useState } from "react";

const useAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch("https://thawing-caverns-72785.herokuapp.com/getProduct?limit=6")
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            });
    }, []);

    return [allProducts, setAllProducts];
};

export default useAllProducts;

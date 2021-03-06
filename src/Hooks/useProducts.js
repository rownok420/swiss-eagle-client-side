import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://thawing-caverns-72785.herokuapp.com/getProduct")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return [products, setProducts];
};

export default useProducts;

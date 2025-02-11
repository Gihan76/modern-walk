import axios from "axios";

export const fetchProducts = async (endPoint = "", params = "", categories = []) => {
    try {
        const products = await axios.get(params ? `${endPoint}${params}` : endPoint);
        const { data } = products;
        if (data?.length) {
            if(categories.length) {
                const filteredProducts = data.filter((p) => categories.includes(p.category));
                return filteredProducts;
            }else{
                return data;
            }
        } else {
            return [];
        }
    } catch (error) {
        console.error("error in fetchProducts ->", error);
    }
};
export const APP_NAME = "Modern Walk";
export const FLASH_SALE = "Flash Sale";
export const MENS_CLOTHING = "Men's Clothing";
export const WOMENS_CLOTHING = "Women's Clothing";

// api endpoints
export const ROOT_END_POINT = "https://fakestoreapi.com";
export const PRODUCTS_END_POINT = `${ROOT_END_POINT}/products`;
export const CATEGORIES_END_POINT = `${PRODUCTS_END_POINT}/category`;
export const CATEGORY_END_POINT = (category) => `${CATEGORIES_END_POINT}/${category}`;
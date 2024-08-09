const { default: SummaryApi } = require("../common")

const fetchCategoryWiseProduct = async (category) => {
    const method = SummaryApi.categoryProduct.method.toUpperCase();
  
    const url = method === 'GET'
      ? new URL(SummaryApi.categoryProduct.url)
      : SummaryApi.categoryProduct.url;
  
    if (method === 'GET') {
      url.searchParams.append('category', category);
    }
  
    const response = await fetch(url, {
      method,
      headers: {
        "content-type": "application/json",
      },
      body: method !== 'GET' ? JSON.stringify({ category }) : undefined,
    });
  
    const dataResponse = await response.json();
    return dataResponse;
  };
  
  export default fetchCategoryWiseProduct;
  
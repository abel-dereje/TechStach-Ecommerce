const backendDomin = "http://localhost:4000"

const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/register`,
        method : "post"
    },
    signIn : {
        url : `${backendDomin}/api/login`,
        method : "post"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomin}/api/logout`,
        method : 'post'
    },
    allUser : {
        url : `${backendDomin}/api/all-user`,
        method : 'get'
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `${backendDomin}/api/upload-product`,
        method : "post"
    }
    ,
    getProducts : {
        url : `${backendDomin}/api/get-product`,
        method : "get"
    },
    productDetails : {
        url : `${backendDomin}/api/product-details`,
        method : "post"
    },
    addToCart : {
        url : `${backendDomin}/api/add-to-cart`,
        method : "post"
    },
    addToCartProductCount : {
        url : `${backendDomin}/api/count-add-to-cart-product`,
        method : 'get'
    },
    addToCartViewProduct : {
        url : `${backendDomin}/api/view-card-product`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${backendDomin}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${backendDomin}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${backendDomin}/api/search`,
        method : 'get'
    },
    categoryProduct : {
        url : `${backendDomin}/api/get-categoryProduct`,
        method : 'get'
    }
}


export default SummaryApi
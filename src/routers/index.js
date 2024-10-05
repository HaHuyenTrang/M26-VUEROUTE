import AboutView from "@/views/AboutView.vue";
import Bai1 from "@/views/Bai1.vue";
import Bai2 from "@/views/Bai2.vue";
import Bai3 from "@/views/Bai3.vue";
import ContactView from "@/views/ContactView.vue";
import ItemFile from "@/views/ItemFile.vue";
import Notf from "@/views/Bai5.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ProductReview from "@/views/ProductReview.vue";
import ProductView from "@/views/ProductView.vue";
import { createRouter, createWebHistory } from "vue-router";
import Bai5 from "@/views/Bai5.vue";
import Bai4 from "@/views/Bai4.vue";
import HomeView from "@/views/HomeView.vue";


const routes=[
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
    },
    {
        path: "/about",
        name: "about",
        component : AboutView,
    },
    {
        path: "/product/:id",
        name: "productDetail",
        component: ProductDetail,
    },
    {
        path: "/product",
        name: "product",
        component: ProductView,
        chidren:[
            {
                path: "detail",
                name: "product-detail",
                component: ProductDetail,
            },
            {
                path: "review",
                name: "product-review",
                component: ProductReview
            }
        ]
    },
    {
        path: "/item/:id",
        name: "itemFile",
        component: ItemFile,
    },
    {
        path: "/",
        name: "home",
        component: Bai1
    },
    {
        path: "/bai2",
        name: "bai2",
        component: Bai2
    },
    {
        path: "/bai3",
        name: "bai3",
        component: Bai3
    },
    {
        path: "/bai4",
        name: "bai4",
        component: Bai4
    },
    {
        path: "/:pathMatch(.*)*",
        name: "bai5",
        component: Bai5
    },

];

// tạo cơ chế định tuyến
const router= createRouter({
    history: createWebHistory(),
    routes,
});

// đẩy ra bên ngoài cho ứng dụng  sử dụng 
export default router;
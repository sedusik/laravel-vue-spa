
import * as VueRouter from "vue-router";

import PostComponent from "./components/PostComponent.vue";
import TagComponent from "./components/TagComponent.vue";

export default VueRouter.createRouter ({

    history: VueRouter.createWebHistory('/'),
    routes: [
        {
            path:'/posts',
            component: PostComponent
        },
        {
            path:'/tags',
            component: TagComponent
        },
    ]

})

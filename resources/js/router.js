
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
        {
            path:'/people',
            component:  () => import('./components/Person/Index.vue'),
            name: 'person.index'
        },
        {
            path:'/people/create',
            component:  () => import('./components/Person/Create.vue'),
            name: 'person.create'
        },
        {
            path:'/people/:id/edit',
            component:  () => import('./components/Person/Edit.vue'),
            name: 'person.edit'
        },
        {
            path:'/people/show',
            component:  () => import('./components/Person/Show.vue'),
            name: 'person.show'
        },
    ]

})

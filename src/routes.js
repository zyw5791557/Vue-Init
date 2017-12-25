// const Login = resolve => require(['./views/Login.vue'],resolve);
const Home = resolve => require(['./views/Home.vue'],resolve);
// const Music = resolve => require(['./views/music/Music.vue'],resolve);
// const Player = resolve => require(['./views/music/Player.vue'],resolve);
const NotFound = resolve => require(['./views/404.vue'],resolve);

let routes = [
    {
        path: '/home',
        component: Home,
        name: 'Home'
    },
    {
        path: '/',
        redirect: { path: '/home' }
    },
    {
        path: '/404',
        component: NotFound,
    },
    {
        path: '*',
        component: NotFound,
    }
];

export default routes;
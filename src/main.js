import DefaultLayout from '~/layouts/Default.vue';
import CategoryLayout from "~/layouts/CategoryLayout.vue";

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('CategoryLayout', CategoryLayout);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Mali:700|Nunito'
  });
}
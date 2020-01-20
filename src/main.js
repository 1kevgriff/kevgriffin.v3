import "./styles/global.css";

import DefaultLayout from "~/layouts/Default.vue";
import CategoryLayout from "~/layouts/CategoryLayout.vue";
import Heading from "~/components/Heading.vue";

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout);
  Vue.component('CategoryLayout', CategoryLayout);
  Vue.component('Heading', Heading);

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Mali:700|Nunito'
  });
}
import DefaultTheme from 'vitepress/theme';
import CustomLayout from './custom-layout.vue';
import CustomHome from './custom-home.vue';

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp({ app }) {
    app.component('custom-home', CustomHome);
  },
};

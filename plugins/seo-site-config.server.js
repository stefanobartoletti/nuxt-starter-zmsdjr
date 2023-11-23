import { useStoryblokApi } from '#imports';

export default defineNuxtPlugin({
  name: 'nuxt-site-config:overrides',
  enforce: 'pre', // makes sure it's ran before nuxt-seo plugin
  setup() {
    let siteConfig = {};
    const storyblokApi = useStoryblokApi();

    const { data } = storyblokApi.get('cdn/stories/config/site-config', {
      version: 'draft',
    });
    siteConfig = data.story;

    updateSiteConfig({
      name: siteConfig.content.site_title,
    });
  },
});

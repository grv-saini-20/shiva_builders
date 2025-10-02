import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html' // or '200.html' depending on your preference
    }),
    paths: {
      base: '/shivabuilder'
    }
  }
};

export default config;

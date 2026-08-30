import { defineConfig } from 'astro/config';

export default defineConfig({
  // Keeping the CSS inline lets the same build work both at
  // muyang-ic.github.io/photography and at a future custom domain.
  build: {
    inlineStylesheets: 'always'
  }
});

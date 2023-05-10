import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    reportCompressedSize: false,
  },
  preview: {
    host: '0.0.0.0',
    port: '3000',
  },
  esbuild: {
    jsxFactory: 'AmberJsx.createElement',
    jsxFragment: 'AmberJsx.Fragment',
    jsxImportSource: 'amber',
    jsxInject: "import { AmberJsx } from 'amber';\n",
  },
});

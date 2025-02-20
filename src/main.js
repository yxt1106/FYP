import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import './style.css'
import App from './App.vue'
const pinia = createPinia()

const app = createApp(App)
app.mount('#app')
app.use(pinia)

// // import requireTransform from "vite-plugin-require-transform";
// import commonjs from 'vite-plugin-commonjs';
// import { nodePolyfills } from 'vite-plugin-node-polyfills'
// // https://vite.dev/config/
// export default defineConfig({
//   define: {
//     'process.env': {}
//   },
//   plugins: [vue(),
//     // commonjs(),
//     // nodePolyfills(),
//   //   requireTransform({
//   //   fileRegex: /.js$|.vue$/,
//   // })
// ],})


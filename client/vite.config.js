import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000
  }
})

// export default (args) => {
//   const generatedScopedName = args.mode === 'production' ? 
//   '[hash:base64:2]' :
//   '[local]_[hash:base64:2]'

//   return defineConfig({
//     plugins: [react()],
//     server:{
//       port: 3000
//     },
//     css: {
//       modules: {
//         localsConvention: 'camelCase',
//         generateScopedName: generatedScopedName
//       }
//     }
//   })
// } 
  
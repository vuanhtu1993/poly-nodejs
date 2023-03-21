### Step 1:
```
// Tạo mới file package.json
npm init
```
### Nodejs có san mot so module nhu sau
#### http
####

## Install vite for nodejs
- Bước 1: npm i vite vite-plugin-node -D
- Bước 2: Tạo 1 file vite.config.js
```js
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
    // ...vite configures
    server: {
        // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
        port: 8080,
    },
    plugins: [
        ...VitePluginNode({
            // Nodejs native Request adapter
            // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
            // you can also pass a function if you are using other frameworks, see Custom Adapter section
            adapter: "express",

            // tell the plugin where is your project entry
            appPath: "./src/server.js",

            // Optional, default: 'viteNodeApp'
            // the name of named export of you app from the appPath file
            exportName: "viteNodeApp",

            // Optional, default: 'esbuild'
            // The TypeScript compiler you want to use
            // by default this plugin is using vite default ts compiler which is esbuild
            // 'swc' compiler is supported to use as well for frameworks
            // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
            // you need to INSTALL `@swc/core` as dev dependency if you want to use swc
            tsCompiler: "esbuild",

            // Optional, default: {
            // jsc: {
            //   target: 'es2019',
            //   parser: {
            //     syntax: 'typescript',
            //     decorators: true
            //   },
            //  transform: {
            //     legacyDecorator: true,
            //     decoratorMetadata: true
            //   }
            // }
            // }
            // swc configs, see [swc doc](https://swc.rs/docs/configuration/swcrc)
            swcOptions: {},
        }),
    ],
    optimizeDeps: {
        // Vite does not work well with optionnal dependencies,
        // you can mark them as ignored for now
        // eg: for nestjs, exlude these optional dependencies:
        // exclude: [
        //   '@nestjs/microservices',
        //   '@nestjs/websockets',
        //   'cache-manager',
        //   'class-transformer',
        //   'class-validator',
        //   'fastify-swagger',
        // ],
    },
});

```
- Bước 3: Thay đổi file package.json 
```json
    "dev": "vite" 
```
- Bước 4: Thêm code cuối file app.js
```js
    // server.js
    export const viteNodeApp = app;
```
- Bước 5: npm run dev


### Cài đat mongodb
#### 1. MongoDB Community Server Download
#### 2. MongoDB compass

mongod --dbpath ~/data/db 

mongodb://localhost:27017
mongodb://127.0.0.1:27017

#### 3. Cai dat mongoose + Ket noi voi CSDL

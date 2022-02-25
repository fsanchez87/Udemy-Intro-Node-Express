# Configuración del proyecto

- `tsc --init` en root 
  
- En tsconfig.jon
  - Modificar "rootDir": "./src"
  - Modificar "outDir": "./dist"
  - "moduleResolution": "node"
  - "target": "ESNext" 

- En package.json
  - "main": "dist/index.js",
  - "start": "node dist/index.js",
  - "dev": "nodemon src/index.ts"

- Instalar Typescript de forma local en las dependencias `npm install --save-dev typescript`

- Instalar `npm install --save-dev ts-node` o `npm install -D ts-node`

- Crear el script Build
  -"build": "tsc"

- `npm install eslint --save-dev`
- `npx eslint --init`

- `npm install --save-dev --save-exact prettier`



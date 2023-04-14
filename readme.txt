# programmeren-6
run: npm run server
package.json stappen: 
- npm init
- description invullen
- entrypoint: server.js kiezen
- license: MIT

- npm i dotenv mongoose colors

- npm i -D express nodemon
- regel 7: test:... vervangen met:   "start": "node backend/server.js",
    "server": "nodemon backend/server.js"
- npm i express-async-handler
- npm i bcryptjs
- npm i jsonwebtoken

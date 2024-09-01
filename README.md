## Correr en dev

1. Clonar el repo
2. Renombrar `.env.template` a `.env` y modificar valores de variables
3. Instalar dependencias `npm i`
4. Levantar base de datos `docker compose up -d`
5. Correr migraciones de Prisma `npx prisma migrate dev`
6. Hidratar info en la DB - Ejecutar seed `npm run seed`
7. Correr el proyecto `npm run dev`

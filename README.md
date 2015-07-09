Az alkalmazás futtatásához szükséges fájlok a ```public``` könyvtárban találhatók, kivéve a fordító által generált fájlokat (```public/app.js```, ```public/app.css```), melyek alapból nincsenek commitolva. Ezen fájlok generálásához a következő lépéseket kell végrehajtani.

Node modulok installálása:

```npm install --production```

Fájlok generálása:

```gulp compile```
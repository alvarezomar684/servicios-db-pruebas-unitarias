# Ejercicio Servicios DB

El objetivo del siguiente ejercicio es simular las operaciones que se realizarían en una base de datos y realizar las pruebas sobre los servicios de **update** y **delete**.

## Modelo User

```jsx
{
	id: Integer,
	firstname: String,
	lastname: String,
	email: String
}
```

## TODO

- [ ]  Implementar la lógica del método **`findById`** y pasar las pruebas unitarias de ese servicio.
- [ ]  Implementar la lógica del método **`create`** y pasar las pruebas.
- [ ]  Completar las pruebas unitarias del servicio **`update`**.
- [ ]  Implementar la lógica del método **`update`** y pasar las pruebas.
- [ ]  Completar las pruebas unitarias del servicio **`delete`**.
- [ ]  Implementar la lógica del método **`delete`** y pasar las pruebas.

## Notas:

1. Tendrás que enfocarte en el archivo de los servicios y pruebas, **no le prestes atención a app ni a server.**
2. Asegúrate de que el id sea entero auto incrementable es decir que al momento de crear un usuario, éste reciba un id de forma dinámica (id del último usuario en la DB + 1).
3. En cada uno de lo métodos tendrás que elegir entre los siguientes métodos:
- `Array.find()` [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- `Array.findIndex()` [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- `Array.splice()` [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- Array.push() [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

## Faker

Es una dependencia para generar datos falsos para nombres, apellidos, emails, contraseñas, etc...

Esta dependencia nos ayuda a evitar tener que pensar en datos falsos de usuarios cuando estamos desarrollando o probando nuestras aplicaciones.

[https://www.npmjs.com/package/faker](https://www.npmjs.com/package/faker)

## Estructura de los archivos

1. Base de datos → `/db/db.json`
2. Clase Servicios → `/services/db.services.js`
3. Pruebas → `/tests/service.test.js`

## Correr las pruebas
`npm test`
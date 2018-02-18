#Proyecto control de gastos
###Tareas Pendientes:
####Cuentas
* Boton Nueva Cuenta: conectado al store mediante una saga
* Boton Editar Datos:
  * Boton Editar Debe aparecer un boton lapiz al lado de cada registro
  * Boton Borrar Debe aparecer un boton cesto al lado de cada registro
  
Se podria hacer un componente heredable que permita mostrar los controles y le pase cada accion.
  
####Registros
* Boton Nueva Registro
* Boton Editar
* Boton Borrar

####Pasar los datos delmock al store y traer los mismos al ingresar despues del FirstTIme Setup

###monedas
Crear componente para agregar monedas
Permitir elegir la moneda por cuenta.
cambiar el tipo de cambio por Moneda
Boton para cambio rapido de moneda

```
Modelo de datos:

Cuentas
 | _Id
 | Nombre
 | Entidad
 | Moneda
 | Descripcion
 | saldo
 | creado
 | modificado

 Registro
 | _Id
 | Fecha
 | IdCuenta
 | Nombre
 | Descripcion
 | Debe
 | Haber
 | Monto
 | PrecioDolar

 Monedas
 | _Id
 | Nombre
 | Pais
 | RelacionDolar
 | Default

 TipoDeCambio
 | _Id
 | _IdMoneda
 | Fecha
 | Pais
 | PrecioDolar

```
- Crear pagina principal
- Crear RegistroNuevaCuenta
- Crear RegistroNuevaMoneda
- Crear RegistrarAsiento

Reglas de negocios:

Al ingresar por primera se pide:

~~* Indicar Pais~~
~~* Agregar Moneda~~
~~* Indicar Precio de Dolar~~

Guardar estos datos y mostrar:

###Pantalla de Dashboard

Gastos del Mes hasta el dia de la fecha
Lista de ultimos gastos

Botones Agregar Cuenta
Agregar Registro


Acciones a guardar:
Nuevo registro
Nueva cuenta
Mostar datos



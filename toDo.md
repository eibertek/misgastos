Proyecto control de gastos

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



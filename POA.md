# TELÉFONO REACT

## Componentes y Responsabilidades

### App

- Renderiza Info, Display, Actions y Keyboard.
- Contiene una array vacía.
- Tiene una función que pasa a las keys, y que almacena el valor de estas en el display.
- Comprueba en cada cambio si el array ha alcanzado 9 elementos, y si lo alcanza no permite que se indroduzcan más.
- Si se alcanzan 9 dígitos se activa el botón de llamar
- Tiene una función de delete, que le pasa al key de delete, que elimina el último número del array (o todos, TBC).
- Función llamar, que se pasa al Action de llamar:
  - Pasa a true el estado isCalling
- Tiene un estado isCalling que se pasa al teclado, a Info y a Actions.
  - Cuando es true:
    - Deshabilita el teclado.
    - Añade la clase 'off' al componente Info
    - Renderiza el botón colgar y desaparece el de llamar
    - Inicia un timer de 5 segundos, y cuando se cumplen se pasa a false
  - Cuando es false:
    - Habilita el teclado.
    - Elimina la clase 'off' del componente Info
    - Renderiza el botón llamar y desaparece el de colgar
- Función colgar, que pasa a false el estado isCalling y resetea el display.

### Info

- Renderiza un mensaje.

### Display

- Renderiza un array de números que RECIBE.

### Actions

- RECIBE una condición en base a cual aplica un texto y una clase a un componente Action ("call" o "hang active").

### Action

- Renderiza un texto RECIBIDO.
- RECIBE una función.
- RECIBE una clase.
- RECIBE un prop true o false según el cual añadirá la clase 'active'

### Keyboard

- Pinta las keys, a las que les pasa un texto y una función.

### Key

- Renderiza un texto RECIBIDO.
- Ejecuta una función onClick que RECIBE.

# PokeMem!

A traves de esta práctica vamos a repasar y utilizar JQuery como libreria para el desarrollo de aplicaciones web.
Si te quedas atascado en algún punto, no dudes en volver a mirar la teoría, mirar la documentación oficial o buscar en internet información!

[Aqui](https://api.jquery.com/) tienes la documentación oficial de JQuery. Vamos a utilizar la última versión disponible de JQuery (3.3.1)


### Información Previa

En primer lugar debemos clonar este repositorio en nuestro equipo
para poder trabajar localmente con el código ya creado.

Una vez tengamos el código en nuestro equipo, podemos ver 3 ficheros sobre los cuales vamos a trabajar: index.html, main.css y main.js.

Ambos contienen algo de código base para el ejercicio, detente unos 
minutos a mirarlo, ya que te puede ayudar con las futuras iteraciones.

El juego que vamos a implementar es el tipico juego de busca la pareja. El funcionamiento es muy básico. Al usuario le aparecen las cartas boca abajo. Cuando el usuario pincha en una carta esta se da la vuelta y muestra el pokemon que tiene. Si solo tenemos esta dada la vuelta, el usuario puede dar la vuelta a otra carta. Cuando la da si el pokemon que muestran las dos cartas es el mismo, estas cartas se quedarán dadas la vuelta y el turno vuelve a empezar. En el caso de que sean distintos pokemons, las dos cartas se dan la vuelta de nuevo y el usuario empieza otro turno.
El juego acaba cuando el usuario consiga encontrar todas las parejas.

El resultado final (iteración 4) quedará así:

Añadir GIF


### Iteración 1

En esta iteración vamos a hacer que la aplicación nada más abrirse pinte las cartas en la pantalla según la disposición del array. También añadiremos que al clicar el usuario sobre la carta, esta se de la vuelta y se muestre, utilizando un alert o un console.log, el valor de la carta. No podrá haber más de una carta dada la vuelta a la vez.


### Iteración 2

En esta iteración vamos a implementar la lógica del juego. Tendrás que implementar el método `selectCard` y `finishGame`. El método `selectCard` contendrá la logica de saber si es la primera carta del turno o la segunda y saber si son iguales, en cuyo caso se sumara 1 al contador de parejas encontradas o si son distintas, ocultarlas de nuevo y comenzar un nuevo turno.
El método `finishGame`, será el método que se ejecutará al finalizar el juego y consistirá en mostrar el popup con clase `popup-win` y bloquear el juego. Solo se podrá volver a jugar si el usuario refresca la pantalla.

Al finalizar esta iteración el usuario podrá jugar. 

### Iteración 3

En esta iteración vamos a realizar dos cosas:

1. Vamos a añadir un contador de los segundos que lleva el usuario. Este contador junto con el del número de movimientos que lleva, los mostraremos en el div con clase `panel`.
2. Vamos a añadir un botón "reset" que le permitirá al usuario resetear el juego
3. Para los contadores podeis utilizar esta libreria que nos genera un contador: [odometer](https://github.hubspot.com/odometer/)


### Iteración 4

Vamos a añadir la posibilidad de seleccionar el nivel de dificultad que queramos. Hasta ahora el nivel era por defecto y estaba definido por el número de parejas que hay en la partida. Este número estaba fijo. Ahora vamos a dar la posibilidad al usuario de que al abrir la aplicación, primero seleccione el nivel y de al botón de comenzar. 
Para ello vamos a crear un formulario con los niveles posibles (del 2 al 9). Este formulario le colocaremos en el div con clase `panel`.


Este es el funcionamiento final:

<img src="posible_solucion.gif"/>


### Bonus

Si te ves con fuerzas, ¿serias capaz de añadir la opción de multijugador al juego? 
En esta opción, al empezar los usuarios introducirian sus nombres y el nivel de dificultad. Cada vez que un usuario falle al buscar una pareja, el turno pasa al otro usuario. Si el usuario acierta, entonces su turno continua. 
La dedicisión de que usuario comienza la partida se tomará de forma aleatoria.
Y cada vez que se cambie de turno, se tiene que informar a los usuarios en la aplicación.

Ganará quien más parejas encuentre.

A por ello!!!


Mucha suerte y keep working!
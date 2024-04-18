# Sustento del ejercicio 6
En este ultimo ejercicio no solo hare el diagrama de secuencia para la aplicación de una sola pagina, también elaborare una comparativa de nuestra pagina y esta.

### Lógica
Al agregar una nueva nota estamos haciendo que el navegador actué en consecuencia, realizando una solicitud HTTP con el método POST a [https://studies.cs.helsinki.fi/exampleapp/new_note_spa](https://studies.cs.helsinki.fi/exampleapp/new_note_spa) esta solicitud ya contiene la nota como datos JSON, lo que significa que solo necesita la lógica que le brinda el servidor como respuesta. En comparación con nuestra aplicación este "método" simplifica mucho los eventos al agregar notas, en comparación con nuestra aplicación.

### Ventajas
¿Porque es importante esto?, pues al analizar esta aplicación me di cuenta que  no solo mejora la cantidad de eventos sino por consecuencia disminuye los datos trasferidos, los recursos utilizados y el tiempo que se tomo en realizar esto. lo podremos apreciar en las siguientes imágenes y gráficas.

![Texto alternativo](/Exercises_Part0_%200.1_0.6/img/img3.PNG)
![Texto alternativo](/Exercises_Part0_%200.1_0.6/img/img4.PNG)

Esta comparativa esta realizada para una nueva solicitud, la primera imagen pertenece a nuestra aplicación y la segunda pertenece ala aplicación de una sola pagina. 

*A continuación se mostrara la gráfica de barras que compara nuestra aplicación(1) con la aplicación de una sola pagina(2)*
```mermaid

xychart-beta
    title "Sales Revenue"
    x-axis [trasferencias 1, recursos 1, trasferencias 2, recursos 2 ]
    y-axis "tamaño (in kB)" 0 --> 17
    bar [15.7, 13.5, 8.9, 7.7 ]
    line [15.7, 13.5, 8.9, 7.7]

```
*El diagrama de secuencia seria el siguiente:*

```mermaid

sequenceDiagram

    participant user
    participant browser
    participant server
    
    user->>browser: Click on the URL of the page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    user->>browser: Entering data into the input field
    activate browser
    user->>browser: Click in button save
    deactivate browser

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: the JavaScript file required to perform the task
    deactivate server

```
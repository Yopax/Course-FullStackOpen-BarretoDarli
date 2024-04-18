# Sustento del ejercicio 5
Como se puede apreciar en la siguiente figura, la aplicación de una sola pagina como a nuestra aplicación tienen una estructura de eventos similares, sim embargo la diferencia se muestra en el ejercicio 6, ya que hay agregaremos una nueva nota y podamos ver las diferencias. mientras tanto la estructura al accedes al sitio tradicional serian la siguiente.

![Texto alternativo](/Exercises_Part0_%200.1_0.6/img/img1.PNG)
![Texto alternativo](/Exercises_Part0_%200.1_0.6/img/img2.PNG)

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

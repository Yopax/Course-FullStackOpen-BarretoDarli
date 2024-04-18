# Sustento del ejercicio 4
Para determinar la cadena de eventos que realiza nuestra pagina al crear una nueva nota, primero se debe tener un contexto general de los eventos previos. con la finalidad de vincularlos y asi conseguir un mejor entendimiento. en este caso en la aplicación intervienen 3 "participantes": **user, browser y server.**

### User
El participante desencadenante de eventos seria el user, ya que es el punto de inicio de todos los eventos, en pocas palabras sin usuario no seria posible esto. El proceso inicia cuando el usuario hace click en el url de la pagina [https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes), esto desencadena que formemos un vinculo con el navegador y este a su vez con el servidor. Lo mismo pasara cuando agreguemos una nueva nota este sera nuestra segunda acción desencadenante.

### Browser
Luego de que el usuario haya hecho click en la url el browser a su vez hará una petición GET https://studies.cs.helsinki.fi/exampleapp/notes al servidor. En síntesis el browser tomara el rol de representante ante el servidor haciendo petición según nuestra necesidades.

### Server
El servidor tendrá la función de brindarnos la información o realizar la lógica necesaria para cumplir con la solicitud realizada, esta información sera respondida a ala solicitud del browser y este nos la mostrara.

*El siguiente diagrama de secuencia se explicara gráficamente todo el proceso de eventos desde que se entra en la pagina hasta que se agrega una nueva nota.*

```mermaid

sequenceDiagram

    participant user
    participant browser
    participant server
    
    user->>browser: Click on the URL of the page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes


    user->>browser: Entering data into the input field
    activate browser
    user->>browser: Click in button save
    deactivate browser

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Solicitud HTTP GET a la Location (/notes)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
    
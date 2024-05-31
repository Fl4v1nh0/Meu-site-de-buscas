/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilo do corpo */
body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
}

/* Container principal */
.container {
    text-align: center;
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 90%;
}

/* Título principal */
.container h1 {
    color: #333;
    margin-bottom: 20px;
    font-size: 2em;
}

/* Campo de entrada de texto */
#searchInput {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

/* Botão de busca */
button {
    padding: 15px 30px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

/* Estilo dos resultados */
#results {
    margin-top: 20px;
    text-align: left;
}

/* Estilo de cada seção de resultado */
.result-section {
    margin-bottom: 30px;
}

/* Título das seções */
.result-section h2 {
    color: #444;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
    margin-bottom: 15px;
}

/* Estilo dos títulos dos resultados */
.result-section h3 a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.result-section h3 a:hover {
    color: #0056b3;
}

/* Estilo dos parágrafos */
.result-section p {
    color: #555;
}

/* Estilo das imagens */
.result-section img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-top: 10px;
}

/* Link para mais informações */
.result-section a {
    display: inline-block;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
}

.result-section a:hover {
    color: #0056b3;
}
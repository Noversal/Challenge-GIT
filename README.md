### By Roxs
### Challenge GIT

#### Instrucciones Generales
Sigue los pasos detallados a continuación. Cada paso debe completarse en tu terminal o herramienta de Git. Al final, incluye las capturas de pantalla de los comandos solicitados como prueba de tu trabajo.

---

### **Parte 1: Inicialización y Estructura Básica**

1. **Crea un nuevo repositorio GIT en una carpeta llamada `DesafíoGit` en tu escritorio**.
   - Comando:

     ```bash
     mkdir DesafíoGit
     cd DeasafíoGit
     ```

2. **Crea tres archivos** dentro de esta carpeta: `index.html`, `styles.css`, y `script.js`. Añade algún contenido a cada archivo. 
   
   Realiza un **commit inicial** con los tres archivos.
   - Comando para añadir los archivos al stage:
     ```bash
     touch index.html style.css script.js
     git add index.html style.css script.js
     ```

   - Comando para hacer el commit con el mensaje: `"Estructura inicial del proyecto"`:
     ```bash
     git commit -m "Estructura inicial del proyecto"
     ```

### **Parte 2: Trabajo con Ramas**

3. **Crea una nueva rama** llamada `feature-responsiveness` y cámbiate a esa rama.
   - Comando:
     ```bash
     # Indica el comando utilizado
     ```

4. En la rama `feature-responsiveness`, **modifica el archivo `styles.css`** añadiendo reglas de estilos responsive.
   
   Haz un commit con el mensaje `"Añadir estilos responsive"`.
   - Comando para añadir el archivo al stage:
     ```bash
     # Indica el comando utilizado
     ```

   - Comando para hacer el commit:
     ```bash
     # Indica el comando utilizado
     ```

5. **Cambia a la rama `main`** y modifica el archivo `index.html`, añadiendo el texto "Bienvenido al sitio web" dentro del body.
   
   Realiza un commit con el mensaje `"Añadir texto de bienvenida en index.html"`.
   - Comando:
     ```bash
     # Indica el comando utilizado
     ```

6. **Crea otra rama llamada `feature-darkmode`** y cámbiate a esa rama.
   - Comando:
     ```bash
     # Indica el comando utilizado
     ```

7. En la rama `feature-darkmode`, **modifica `styles.css`** añadiendo soporte para un modo oscuro. Haz un commit con el mensaje `"Añadir soporte para dark mode"`.
   - Comando para añadir el archivo al stage:
     ```bash
     # Indica el comando utilizado
     ```

   - Comando para hacer el commit:
     ```bash
     # Indica el comando utilizado
     ```

### **Parte 3: Rebase y Resolución de Conflictos**

8. **Rebasa la rama `feature-darkmode` sobre `main`**.
   - Comando:
     ```bash
     # Indica el comando utilizado
     ```

9. Si surge algún conflicto durante el rebase, **resuélvelo manualmente**. Una vez resueltos, completa el rebase.

   **Captura de pantalla**: Adjunta una captura de la resolución de conflictos y el rebase exitoso.
   
   Captura de pantalla:
   - [Espacio para adjuntar imagen]

10. **Haz el merge de `feature-darkmode` en `main`**.
    - Comando:
      ```bash
      # Indica el comando utilizado
      ```

11. Ahora, **rebasa la rama `feature-responsiveness` sobre `main`**.
    - Comando:
      ```bash
      # Indica el comando utilizado
      ```

12. Resuelve cualquier conflicto que surja y haz el merge de la rama en `main`.

---

### **Parte 4: Cherry-pick y Eliminación de Commits**

13. **Crea una nueva rama llamada `hotfix-title`** y añade un `<h1>` con el texto "Título Principal" en el archivo `index.html`.
   
    Haz un commit con el mensaje `"Añadir título principal"`.

    - Comando para hacer el commit:
      ```bash
      # Indica el comando utilizado
      ```

14. **Realiza un commit en `main`** que añada un comentario en el archivo `script.js` con el mensaje `"Hotfix: comentario en script.js"`.
    - Comando para hacer el commit:
      ```bash
      # Indica el comando utilizado
      ```

15. **Haz un cherry-pick del commit de la rama `hotfix-title` en la rama `main`**.
    - Comando:
      ```bash
      # Indica el comando utilizado
      ```

16. **Elimina el último commit** en `main` (el commit de emergencia en `script.js`). El archivo `script.js` debe volver a su estado original.
    - Comando:
      ```bash
      # Indica el comando utilizado
      ```

    **Captura de pantalla**: Adjunta una captura del historial de commits tras eliminar el último commit.
    
    Captura de pantalla:
    - [Espacio para adjuntar imagen]

---

### **Parte 5: Historial y Finalización**

17. **Muestra todo el historial de commits** del repositorio.
    - Comando:
      ```bash
      # Indica el comando utilizado
      ```

    **Captura de pantalla**: Adjunta la captura de pantalla del historial de commits.

---

### **Entrega**

1. Adjunta todas las capturas de pantalla solicitadas.
2. Verifica que tu historial de commits sea correcto y que los archivos estén en el estado adecuado en cada paso del proceso.

---

¡Buena suerte!

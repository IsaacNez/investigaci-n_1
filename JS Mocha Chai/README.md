# Unity tests: Javascript Framework #

### La guía para el uso de Mocha y Chai en Linux ###

> Por Fabrizio Dumani, Bryan Masís e Isaac Núñez

Antes de poder utilizar estos frameworks, debe verificar que tiene instalado `npm`, esto se hace mediante:

> $ apt install npm

Si el resultado en consola le indica que no debe hacer nada más, significa que ya lo tiene instalado.

Debe instalar `mocha` y `chai` mediante el uso de `npm` usando el siguiente comando:

>  $ sudo npm install mocha chai

Luego de esto, ir al directorio de trabajo mediante:

> $ cd <carpeta_del_proyecto>

Aquí se debe iniciar el proyecto en JS mediante:

> $ npm init

Configura los datos pedidos en consola, hecho esto, se creará un archivo llamado `package.json` 
que tiene configuraciones iniciales, dentro de este archivo debe cambiar la subsección dentro de `scripts` llamada
`test` por `mocha`.

Luego debe utilizar:

> $ npm install mocha chai --save-dev

Esto es para agregar las bibliotecas al proyecto creado.

Finalmente, crear una carpeta llamada `test`, pues `mocha` buscará esta carpeta para realizar las pruebas.
Aquí es donde se deben crear los archivos donde estarán desarrolladas las pruebas. Para realizar las pruebas se utiliza:

> $ npm run test

Si este comando genera algún error, realizar este paso:

> $ npm install run

Es posible que node les genere algún error, esto es posible que en nuevas versiones de linux tenga la carpeta
de instalación en diferente dirección de donde `mocha` lo tiene especificado, para corregir este error
se puede crear un *symbolic link* mediante:

> $ sudo ln -fs /usr/bin/nodejs /usr/local/bin/node
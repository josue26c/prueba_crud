*Ejecutado con JDK 18.
*Crear una base de datos en SQLEXPRESS Sql Server llamada prueba_cobis.
*La tabla se creará automáticamente al ejecutar el Backend.
IMPORTANTE
Ir a la ruta: backend\src\main\resources y copiar y pegar en el archivo application.properties lo siguiente:
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=prueba_cobis;encrypt=true;trustServerCertificate=true;
spring.datasource.username=sa
spring.datasource.password=12345
spring.jpa.hibernate.ddl-auto=update
spring.jackson.time-zone= America/Bogota

*Cambiar en el archivo application.properties las credenciales para que se pueda conectar a su Base de datos
*Dentro de la carpeta backend ejecutar en consola el comando .\mvnw.cmd spring-boot:run para correr el Backend.

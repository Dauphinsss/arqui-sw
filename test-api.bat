@echo off
echo ========================================
echo Probando API de Usuarios - SOLID Demo
echo ========================================
echo.

echo [1] Listar usuarios (debe estar vacio al inicio)
curl http://localhost:3000/api/users
echo.
echo.

echo [2] Crear primer usuario: Ana Torres
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d "{\"name\": \"Ana Torres\", \"email\": \"ana@univ.edu\"}"
echo.
echo.

echo [3] Crear segundo usuario: Luis Mendez
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d "{\"name\": \"Luis Mendez\", \"email\": \"luis@univ.edu\"}"
echo.
echo.

echo [4] Crear tercer usuario: Carmen Vega
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d "{\"name\": \"Carmen Vega\", \"email\": \"carmen@univ.edu\"}"
echo.
echo.

echo [5] Listar todos los usuarios creados
curl http://localhost:3000/api/users
echo.
echo.

echo ========================================
echo Pruebas completadas!
echo ========================================
pause

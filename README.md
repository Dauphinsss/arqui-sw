# Sistema de Gestión de Usuarios - Principios SOLID

Sistema de gestión de usuarios con arquitectura limpia implementando los 5 principios SOLID usando Next.js y TypeScript.

## 🚀 Inicio Rápido

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar el servidor
```bash
npm run dev
```

### 3. Abrir en el navegador
```
http://localhost:3000
```

¡Listo! Ya puedes registrar usuarios y ver la lista en tiempo real.

---

## 📁 Estructura del Proyecto

```
src/core/
├── entities/        → User.ts (Modelos de datos)
├── repositories/    → UserRepository.ts (Acceso a datos)
└── services/        → UserService.ts (Lógica de negocio)

app/
├── api/users/       → route.ts (API REST)
└── page.tsx         → Interfaz web
```

---

## 🧪 Probar la API

### Con el script automático:
```bash
test-api.bat
```

### Manualmente con curl:

**Listar usuarios:**
```bash
curl http://localhost:3000/api/users
```

**Crear usuario:**
```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d "{\"name\": \"Juan Perez\", \"email\": \"juan@univ.edu\"}"
```

---

## 📚 Principios SOLID Implementados

- **S** - Single Responsibility: `User.ts`
- **O** - Open/Closed: `UserRepository.ts`
- **L** - Liskov Substitution: Interfaces intercambiables
- **I** - Interface Segregation: `IUserReader` / `IUserWriter`
- **D** - Dependency Inversion: Inyección de dependencias

Lee [GUIA_DEFENSA_SOLID.md](GUIA_DEFENSA_SOLID.md) para la explicación completa de cada principio.

---

## 🛠️ Tecnologías

- Next.js 16
- TypeScript
- Tailwind CSS
- API REST

"use client";

import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Cargar usuarios al inicio
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      setMessage(data.message);
      setName("");
      setEmail("");
      fetchUsers(); // Recargar la lista
    } catch (error) {
      setMessage("Error al crear usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Sistema de Gestión de Usuarios
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Demostración de Principios SOLID en Next.js
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Registrar Nuevo Usuario
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Ej: Juan Pérez"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="juan@universidad.edu"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Registrando..." : "Registrar Usuario"}
            </button>
          </form>
          {message && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
              {message}
            </div>
          )}
        </div>

        {/* Lista de Usuarios */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Usuarios Registrados ({users.length})
            </h2>
            <button
              onClick={fetchUsers}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition duration-200"
            >
              Actualizar
            </button>
          </div>

          {users.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No hay usuarios registrados aún. ¡Registra el primero!
            </p>
          ) : (
            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition duration-200"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {user.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {user.email}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                      ID: {user.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer con info SOLID */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Principios SOLID Implementados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">S</span>
              <span className="text-gray-700 dark:text-gray-300">Single Responsibility - User.ts</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">O</span>
              <span className="text-gray-700 dark:text-gray-300">Open/Closed - UserRepository.ts</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">L</span>
              <span className="text-gray-700 dark:text-gray-300">Liskov Substitution - IUserRepository</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">I</span>
              <span className="text-gray-700 dark:text-gray-300">Interface Segregation - IUserReader/Writer</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">D</span>
              <span className="text-gray-700 dark:text-gray-300">Dependency Inversion - UserService</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

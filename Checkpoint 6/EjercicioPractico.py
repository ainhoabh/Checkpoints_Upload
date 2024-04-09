
# Ejercicio práctico:

# Cree una clase de Python llamada Usuario que use el método init y cree un nombre de usuario y una contraseña. Crea un objeto usando la clase.


class Usuario:
    def __init__(self, nombre, contraseña):
        self.nombre = nombre
        self.cs = contraseña


usuario_1 = Usuario("Ana", "c1a2s3a4")

print(usuario_1.nombre)
print(usuario_1.cs)
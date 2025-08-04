from django.db import models

TIPOS_POKEMON = (
    ('F', 'Fuego'),
    ('A', 'Agua'),
    ('PL', 'Planta'), 
    ('EL', 'Eléctrico'),
    ('N', 'Normal'),
)

class Entrenador(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    nivel = models.IntegerField()

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Pokemon(models.Model):
    nombre = models.CharField(max_length=100)
    tipo = models.CharField(max_length=2, choices=TIPOS_POKEMON)  # 👈 Aquí estaba el problema
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.DecimalField(max_digits=5, decimal_places=2)
    fotografia = models.ImageField(upload_to='pokemon_fotos/', null=True, blank=True)
    entrenador = models.ForeignKey('Entrenador', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nombre

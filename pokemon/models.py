from django.db import models

TIPOS_POKEMON = (
    ('F', 'Fuego'),
    ('A', 'Agua'),
    ('PL', 'Planta'), 
    ('EL', 'Eléctrico'),
    ('N', 'Normal'),
)

class Pokemon(models.Model):
    nombre = models.CharField(max_length=100)
    nombre_entrenador = models.CharField(max_length=100)
    tipo = models.CharField(max_length=2, choices=TIPOS_POKEMON)
    peso = models.DecimalField(max_digits=5, decimal_places=2)
    altura = models.DecimalField(max_digits=5, decimal_places=2)
    fotografia = models.ImageField(upload_to='pokemon_fotos/', null=True, blank=True)

    def __str__(self):
        return self.nombre

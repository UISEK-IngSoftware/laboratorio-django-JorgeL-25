from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from . import views
from . import views_entrenador



app_name = "pokedex"

urlpatterns = [
    path("", views.index, name="index"),
    path("pokemon/<int:id>/", views.pokemon, name="pokemon"),
    path("pokemon/add/", views.add_pokemon, name="add_pokemon"),
    path('entrenadores/', views_entrenador.lista_entrenadores, name='lista_entrenadores'),
    path('entrenadores/agregar/', views_entrenador.agregar_entrenador, name='agregar_entrenador'),
    path('entrenadores/editar/<int:id>/', views_entrenador.editar_entrenador, name='editar_entrenador'),
    path('entrenadores/eliminar/<int:id>/', views_entrenador.eliminar_entrenador, name='eliminar_entrenador'),
    ]

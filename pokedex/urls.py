from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from .import views

app_name = "pokedex"

urlpatterns = [
    path("", views.index, name="index"),
    path("pokemon/<int:id>/", views.pokemon, name="pokemon"),
    path("pokemon/add/", views.add_pokemon, name="add_pokemon"),
    ]

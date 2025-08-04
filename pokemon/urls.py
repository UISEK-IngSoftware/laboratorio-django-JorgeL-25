from django.urls import path
from . import views

app_name = 'pokemon'

urlpatterns = [
    path('', views.lista_pokemons, name='home'),
    path('agregar/', views.agregar_pokemon, name='agregar_pokemon'),
    path('editar/<int:id>/', views.editar_pokemon, name='editar_pokemon'),
    path('eliminar/<int:id>/', views.eliminar_pokemon, name='eliminar_pokemon'),
    path('detalle/<int:pk>/', views.detalle_pokemon, name='detalle_pokemon'),
]

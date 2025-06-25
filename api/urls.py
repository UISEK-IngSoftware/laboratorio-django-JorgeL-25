from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import PokemonViewSet

router = DefaultRouter()
router.register(r'pokemons', PokemonViewSet, basename='pokemons')

urlpatterns = [
    path('', include(router.urls)),
]

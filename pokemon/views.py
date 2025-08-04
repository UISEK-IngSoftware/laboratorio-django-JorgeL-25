from django.shortcuts import render, get_object_or_404, redirect
from .models import Pokemon
from .forms import PokemonForm
from django.contrib.auth.decorators import login_required


def lista_pokemons(request):
    pokemons = Pokemon.objects.all()
    return render(request, 'pokemon/lista_pokemons.html', {'pokemons': pokemons})

def detalle_pokemon(request, pk):
    pokemon = get_object_or_404(Pokemon, pk=pk)
    return render(request, 'pokemon/detalle_pokemon.html', {'pokemon': pokemon})

@login_required
def agregar_pokemon(request):
    if request.method == 'POST':
        form = PokemonForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('pokemon:home')
    else:
        form = PokemonForm()
    return render(request, 'pokemon/formulario_pokemon.html', {'form': form, 'titulo': 'Agregar Pokémon'})

@login_required
def editar_pokemon(request, pk):
    pokemon = get_object_or_404(Pokemon, pk=pk)
    if request.method == 'POST':
        form = PokemonForm(request.POST, request.FILES, instance=pokemon)
        if form.is_valid():
            form.save()
            return redirect('pokemon:home')
    else:
        form = PokemonForm(instance=pokemon)
    return render(request, 'pokemon/formulario_pokemon.html', {'form': form, 'titulo': 'Editar Pokémon'})

@login_required
def eliminar_pokemon(request, pk):
    pokemon = get_object_or_404(Pokemon, pk=pk)
    if request.method == 'POST':
        pokemon.delete()
        return redirect('pokemon:home')
    return render(request, 'pokemon/eliminar_confirmacion.html', {'pokemon': pokemon})

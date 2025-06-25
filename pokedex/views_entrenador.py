from django.shortcuts import render, redirect, get_object_or_404
from pokemon.models import Entrenador
from .forms import EntrenadorForm

def lista_entrenadores(request):
    entrenadores = Entrenador.objects.all()
    return render(request, 'pokedex/lista_entrenadores.html', {'entrenadores': entrenadores})

def agregar_entrenador(request):
    if request.method == 'POST':
        form = EntrenadorForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('pokedex:lista_entrenadores')
    else:
        form = EntrenadorForm()
    return render(request, 'pokedex/form_entrenador.html', {'form': form})

def editar_entrenador(request, id):
    entrenador = get_object_or_404(Entrenador, id=id)
    if request.method == 'POST':
        form = EntrenadorForm(request.POST, instance=entrenador)
        if form.is_valid():
            form.save()
            return redirect('pokedex:lista_entrenadores')
    else:
        form = EntrenadorForm(instance=entrenador)
    return render(request, 'pokedex/form_entrenador.html', {'form': form})

def eliminar_entrenador(request, id):
    entrenador = get_object_or_404(Entrenador, id=id)
    if request.method == 'POST':
        entrenador.delete()
        return redirect('pokedex:lista_entrenadores')
    return render(request, 'pokedex/confirmar_eliminar.html', {'entrenador': entrenador})

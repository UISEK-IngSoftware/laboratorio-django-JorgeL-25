from rest_framework import serializers
from pokemon.models import Pokemon
import base64
from django.core.files.base import ContentFile

class PokemonSerializer(serializers.ModelSerializer):
    picture = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = Pokemon
        fields = ['id', 'nombre', 'tipo', 'peso', 'altura', 'fotografia', 'picture']

    def create(self, validated_data):
        picture_data = validated_data.pop('picture', None)
        if picture_data:
            format, imgstr = picture_data.split(';base64,')
            ext = format.split('/')[-1]
            validated_data['fotografia'] = ContentFile(base64.b64decode(imgstr), name=f"pokemon.{ext}")
        return super().create(validated_data)

    def update(self, instance, validated_data):
        picture_data = validated_data.pop('picture', None)
        if picture_data:
            format, imgstr = picture_data.split(';base64,')
            ext = format.split('/')[-1]
            instance.fotografia = ContentFile(base64.b64decode(imgstr), name=f"pokemon.{ext}")
        return super().update(instance, validated_data)

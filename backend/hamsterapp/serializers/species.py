from rest_framework import serializers
from hamsterapp.models import SpeciesModel


class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpeciesModel
        fields = '__all__'

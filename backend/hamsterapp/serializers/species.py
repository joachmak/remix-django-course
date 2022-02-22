from rest_framework import serializers
from hamsterapp.models import SpeciesModel


class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpeciesModel
        fields = '__all__'

    @staticmethod
    def validate_typical_weight(value):
        """ Validation for the SpeciesModel typical_weight attribute """
        MAX_WEIGHT = 500
        if int(value) > MAX_WEIGHT:
            raise serializers.ValidationError(
                f"No hamster species weigh more than {MAX_WEIGHT}g. According to Wikipedia, the largest hamster "
                f"species (the European hamster) weighs between 220-460g.")
        return value

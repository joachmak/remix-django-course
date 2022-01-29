from rest_framework import serializers
from hamsterapp.models import HamsterModel


class HamsterSerializer(serializers.ModelSerializer):
    class Meta:
        model = HamsterModel
        fields = '__all__'

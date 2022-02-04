from rest_framework import serializers
from hamsterapp.models import WeightRecordModel


class WeightRecordSerializer(serializers.ModelSerializer):
    # Since hamster_bmi is a @property, it will not be recognized as a field unless we explicitly define it
    hamster_bmi = serializers.ReadOnlyField()

    class Meta:
        model = WeightRecordModel
        fields = '__all__'

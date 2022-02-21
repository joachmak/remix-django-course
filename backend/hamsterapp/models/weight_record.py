from django.core.exceptions import ValidationError
from django.db import models

from hamsterapp.models.hamster import HamsterModel


class WeightRecordModel(models.Model):
    weight_in_grams = models.PositiveSmallIntegerField()
    date = models.DateField()
    # Here, we want to relate a weight record to a hamster.
    # on_delete=models.CASCADE means that if the hamster is deleted, this record will also be deleted automatically
    hamster = models.ForeignKey(HamsterModel, on_delete=models.CASCADE)

    @property
    def hamster_bmi(self):
        height_in_m = self.hamster.height / 100
        weight_in_kg = self.weight_in_grams / 1000
        return round(weight_in_kg / (height_in_m**2), 2)

    class Meta:
        verbose_name = "weight record"
        verbose_name_plural = "weight records"

    def __str__(self):
        return f"{self.hamster}: {self.weight_in_grams}g on {self.date}"

    def clean(self):
        if self.weight_in_grams > 250:
            raise ValidationError("Weight cannot be above 250g")

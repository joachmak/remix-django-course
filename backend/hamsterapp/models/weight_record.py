from django.db import models
from hamsterapp.models.hamster import HamsterModel


class WeightRecordModel(models.Model):
    weight_in_grams = models.PositiveSmallIntegerField()
    date = models.DateField()
    # Here, we want to relate a weight record to a hamster.
    # on_delete=models.CASCADE means that if the hamster is deleted, this record will also be deleted automatically
    hamster = models.ForeignKey(HamsterModel, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "weight record"
        verbose_name_plural = "weight records"

    def __str__(self):
        return f"{self.hamster}: {self.weight_in_grams}g on {self.date}"

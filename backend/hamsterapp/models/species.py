from django.db import models


class SpeciesModel(models.Model):
    name = models.CharField(max_length=50)
    latin_name = models.CharField(max_length=50, blank=True)
    description = models.TextField(max_length=300)
    typical_weight = models.PositiveSmallIntegerField()

    class Meta:
        verbose_name = "species"
        verbose_name_plural = "species"

    def __str__(self):
        return f"{self.name} / {self.latin_name}"

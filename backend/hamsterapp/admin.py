from django.contrib import admin

from hamsterapp.models import HamsterModel, WeightRecordModel, SpeciesModel


@admin.register(HamsterModel)
class HamsterAdmin(admin.ModelAdmin):
    list_display = ('name', 'age', )


@admin.register(WeightRecordModel)
class WeightRecordAdmin(admin.ModelAdmin):
    list_display = ('date', 'hamster', 'weight_in_grams')


@admin.register(SpeciesModel)
class SpeciesAdmin(admin.ModelAdmin):
    pass

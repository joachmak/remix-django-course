from django.contrib import admin

from hamsterapp.models import HamsterModel, SpeciesModel


@admin.register(HamsterModel)
class HamsterAdmin(admin.ModelAdmin):
    pass


@admin.register(SpeciesModel)
class SpeciesAdmin(admin.ModelAdmin):
    pass

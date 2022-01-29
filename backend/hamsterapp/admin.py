from django.contrib import admin
from hamsterapp.models.hamster import HamsterModel
from hamsterapp.models.weight_record import WeightRecordModel


@admin.register(HamsterModel)
class HamsterAdmin(admin.ModelAdmin):
    pass


@admin.register(WeightRecordModel)
class WeightRecordAdmin(admin.ModelAdmin):
    pass

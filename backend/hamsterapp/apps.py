from django.apps import AppConfig


class HamsterappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'hamsterapp'
    verbose_name = "hamsters"  # What is actually displayed in the admin panel

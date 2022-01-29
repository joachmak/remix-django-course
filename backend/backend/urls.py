"""
This is the "main" urls.py file. All incoming requests start here.
Suppose we enter the url
    127.0.0.1:8000/hamsters/all
The first part of the url after the port number 8080/ is "hamsters". Thus, django will look for a
url pattern in this file that matches "hamsters".
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hamsters/', include("hamsterapp.urls"))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

import logging

from django.shortcuts import get_object_or_404
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT

from hamsterapp.models import SpeciesModel
from hamsterapp.serializers import SpeciesSerializer

logger = logging.getLogger(__name__)


class SpeciesViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin,
                     mixins.DestroyModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    """
    A simple ViewSet for hamster species.
    https://www.django-rest-framework.org/api-guide/viewsets/
    """
    def list(self, request, *args, **kwargs):
        """
        GET requests without arguments will be handled by this method!
        For example: GET 127.0.0.1:8000/species/
        """
        queryset = SpeciesModel.objects.all()
        serializer = SpeciesSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, *args, **kwargs):
        """
        GET requests with arguments will be handled by this method!
        For example: GET 127.0.0.1:8000/species/1
        """
        # get_object_or_404 docs: https://docs.djangoproject.com/en/4.0/topics/http/shortcuts/#get-object-or-404
        species = get_object_or_404(SpeciesModel, pk=pk)
        serializer = SpeciesSerializer(species)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        """
        POST requests will be handled by this method!
        For example: POST 127.0.0.1:8000/species/
        """
        serializer = SpeciesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "success", "data": serializer.data})

    def destroy(self, request, pk=None, *args, **kwargs):
        """
        DELETE requests will be handled by this method!
        Such requests must have an id. (We must know which species to delete!)
        For example: DELETE 127.0.0.1:8000/species/1
        """
        species: SpeciesModel = get_object_or_404(SpeciesModel, pk=pk)
        species.delete()
        return Response(status=HTTP_204_NO_CONTENT)

    def update(self, request, pk=None, *args, **kwargs):
        """
        PUT requests will be handled by this method!
        Such requests must have an id. (We must know which species to update!)
        For example: PUT 127.0.0.1:8000/species/1
        """
        species: SpeciesModel = get_object_or_404(SpeciesModel, pk=pk)
        serializer = SpeciesSerializer(instance=species, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "success", "data": serializer.data})

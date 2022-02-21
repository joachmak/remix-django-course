import logging

from django.shortcuts import get_object_or_404
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT
from rest_framework.parsers import MultiPartParser
from rest_framework.parsers import FormParser

from hamsterapp.models import HamsterModel
from hamsterapp.serializers import HamsterSerializer

from hamsterapp.utils import remove_hamster_image

logger = logging.getLogger(__name__)


class HamsterViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin,
                     mixins.DestroyModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    """
    A simple ViewSet for hamsters.
    https://www.django-rest-framework.org/api-guide/viewsets/
    """
    def list(self, request, *args, **kwargs):
        """
        GET requests without arguments will be handled by this method!
        For example: GET 127.0.0.1:8000/hamsters/
        """
        queryset = HamsterModel.objects.all()
        serializer = HamsterSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, *args, **kwargs):
        """
        GET requests with arguments will be handled by this method!
        For example: GET 127.0.0.1:8000/hamsters/1
        """
        # get_object_or_404 docs: https://docs.djangoproject.com/en/4.0/topics/http/shortcuts/#get-object-or-404
        hamster = get_object_or_404(HamsterModel, pk=pk)
        serializer = HamsterSerializer(hamster)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        """
        POST requests will be handled by this method!
        For example: POST 127.0.0.1:8000/hamsters/
        """
        parser_classes = [MultiPartParser, FormParser]
        serializer = HamsterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "success", "data": serializer.data})

    def destroy(self, request, pk=None, *args, **kwargs):
        """
        DELETE requests will be handled by this method!
        Such requests must have an id. (We must know which hamster to delete!)
        For example: DELETE 127.0.0.1:8000/hamsters/1
        """
        hamster: HamsterModel = get_object_or_404(HamsterModel, pk=pk)
        remove_hamster_image(str(hamster.image))
        hamster.delete()
        return Response(status=HTTP_204_NO_CONTENT)

    def update(self, request, pk=None, *args, **kwargs):
        """
        PUT requests will be handled by this method!
        Such requests must have an id. (We must know which hamster to update!)
        For example: PUT 127.0.0.1:8000/hamsters/1
        """
        hamster: HamsterModel = get_object_or_404(HamsterModel, pk=pk)
        serializer = HamsterSerializer(instance=hamster, data=request.data)
        serializer.is_valid(raise_exception=True)
        remove_hamster_image(str(hamster.image))
        serializer.save()
        return Response({"message": "success", "data": serializer.data})

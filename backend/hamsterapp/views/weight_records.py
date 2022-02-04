import logging

from django.shortcuts import get_object_or_404
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.status import HTTP_204_NO_CONTENT

from hamsterapp.models import WeightRecordModel
from hamsterapp.serializers import WeightRecordSerializer

logger = logging.getLogger(__name__)


class WeightRecordViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin,
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
        queryset = WeightRecordModel.objects.all()
        serializer = WeightRecordSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, *args, **kwargs):
        """
        GET requests with arguments will be handled by this method!
        For example: GET 127.0.0.1:8000/hamsters/1
        """
        # get_object_or_404 docs: https://docs.djangoproject.com/en/4.0/topics/http/shortcuts/#get-object-or-404
        weight_record = get_object_or_404(WeightRecordModel, pk=pk)
        serializer = WeightRecordSerializer(weight_record)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        """
        POST requests will be handled by this method!
        For example: POST 127.0.0.1:8000/hamsters/
        """
        serializer = WeightRecordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "success", "data": serializer.data})

    def destroy(self, request, pk=None, *args, **kwargs):
        """
        DELETE requests will be handled by this method!
        Such requests must have an id. (We must know which hamster to delete!)
        For example: DELETE 127.0.0.1:8000/hamsters/1
        """
        weight_record: WeightRecordModel = get_object_or_404(WeightRecordModel, pk=pk)
        weight_record.delete()
        return Response(status=HTTP_204_NO_CONTENT)

    def update(self, request, pk=None, *args, **kwargs):
        """
        PUT requests will be handled by this method!
        Such requests must have an id. (We must know which hamster to update!)
        For example: PUT 127.0.0.1:8000/hamsters/1
        """
        weight_record: WeightRecordModel = get_object_or_404(WeightRecordModel, pk=pk)
        serializer = WeightRecordSerializer(instance=weight_record, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "success", "data": serializer.data})

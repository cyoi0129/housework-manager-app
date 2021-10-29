# coding: utf-8

import django_filters
from rest_framework import viewsets, filters, generics, permissions
from django.shortcuts import render
from .models import Master, Task
from .serializer import MasterSerializer
from .serializer import TaskSerializer
from rest_framework.response import Response

class MasterViewSet(viewsets.ModelViewSet):
    queryset = Master.objects.all()
    serializer_class = MasterSerializer
    filter_fields = ('user', 'type')
    def get_queryset(self):
        return Master.objects.filter(user=self.request.user.id)

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.none()
    serializer_class = TaskSerializer
    filter_fields = ('user', 'master', 'date', 'person')
    
    def get_queryset(self):
        queryset = Task.objects.all()
        start_date = self.request.GET.get('start_date')
        end_date = self.request.GET.get('end_date')
        return queryset.filter(user=self.request.user.id, date__range=[start_date, end_date])

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data, list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        results = Task.objects.all()
        output_serializer = TaskSerializer(results, many=True)
        data = output_serializer.data[:]
        return Response(data)

# class TaskViewSet(viewsets.ModelViewSet):
#     serializer_class = TaskSerializer
#     queryset = Task.objects.all()
#     filter_fields = ('user', 'master', 'person', 'date')

#     def get_queryset(self):
#         return Task.objects.filter(user=self.request.user.id)

#     def get_serializer(self, *args, **kwargs):
#         if self.request.method.lower() == 'post':
#             data = kwargs.get('data')
#             kwargs['many'] = isinstance(data, list)
#         return super(TaskViewSet, self).get_serializer(*args, **kwargs)
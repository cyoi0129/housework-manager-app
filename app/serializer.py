# coding: utf-8

from rest_framework import serializers
from rest_framework.utils.serializer_helpers import ReturnDict
from .models import Master, Task
from django.db import transaction


class MasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Master
        fields = ('id', 'user', 'type', 'name', 'point')

class TaskListSerializer(serializers.ListSerializer):
    def create(self, validated_data):
        new_tasks = [Task(**p) for p in validated_data if not p.get('id')]
        updating_data = {p.get('id'): p for p in validated_data if p.get('id')}
        # query old tasks
        old_tasks = Task.objects.filter(id__in=updating_data.keys())
        with transaction.atomic():
            # create new tasks
            all_tasks = Task.objects.bulk_create(new_tasks)
            # update old tasks
            for task in old_tasks:
                data = updating_data.get(task.id, {})
                # pop id to remove
                data.pop('id')
                updated_task = Task(id=task.id, **data)
                updated_task.save()
                all_tasks.append(updated_task)
        return all_tasks

class TaskSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    class Meta:
        list_serializer_class = TaskListSerializer
        model = Task
        fields = '__all__'
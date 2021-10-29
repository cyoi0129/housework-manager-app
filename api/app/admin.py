from django.contrib import admin
from .models import Master, Task

@admin.register(Master)
class Master(admin.ModelAdmin):
    pass

@admin.register(Task)
class Task(admin.ModelAdmin):
    pass
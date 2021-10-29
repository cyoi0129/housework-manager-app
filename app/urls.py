from rest_framework import routers
from .views import MasterViewSet
from .views import TaskViewSet

router = routers.DefaultRouter()
router.register(r'masters', MasterViewSet)
router.register(r'tasks', TaskViewSet)
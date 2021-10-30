from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from app.urls import router as app_router
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^api/', include(app_router.urls)),
    url(r'^web/', TemplateView.as_view(template_name="index.html"))
]
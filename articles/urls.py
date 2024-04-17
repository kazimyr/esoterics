from django.urls import path
from articles.views import *

urlpatterns = [
    path('', home, name='home'),
    path('<menu>/', menu , name='menu'),
    path('<menu>/<submenu>/', submenu , name='submenu'),
    path('<menu>/<submenu>/<article>', article , name='article'),
]
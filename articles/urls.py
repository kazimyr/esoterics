from django.urls import path

from articles.views import *

urlpatterns = [
    path('', home, name='home'),
    path('<menu_slug>/', menu , name='menu'),
    path('<menu_slug>/<submenu_slug>/', submenu , name='submenu'),
    path('<menu_slug>/<submenu_slug>/<article_slug>', article , name='article'),
]
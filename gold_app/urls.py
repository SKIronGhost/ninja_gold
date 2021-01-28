from django.urls import path
from . import views

urlpatterns = [
    path('', views.new_game),
    path('new_game', views.index),
    path('playing', views.playing),
    path('process/farm', views.process_farm),
    path('process/cave', views.process_cave),
    path('process/house', views.process_house),
    path('process/casino', views.process_casino)
]

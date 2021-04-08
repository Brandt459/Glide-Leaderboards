from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('map/<str:map>/', views.getMap),
    path('submit_record/', views.submitRecord),
    path('users/', views.UserList.as_view()),
    path('user_id/', views.getUserId),
    path('token-auth/', obtain_jwt_token),
    path('create_player/', views.createPlayer),
    path('world-records/<str:map>/', views.getWorldRecords),
    path('rankings/', views.rankings)
]

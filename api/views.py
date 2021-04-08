from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.db.models.functions import Length
from . import models
from .models import Player, WorldRecord
from .serializers import PlayerSerializer, UserSerializerWithToken
import re
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions, status


# Create your views here.


def index(request):
    """ if request.method == 'POST':
        if request.user.is_authenticated:
            if request.user.is_staff:
                form = UpdatePBAdmin(request.POST)
            else:
                form = UpdatePB(request.POST)
            if form.is_valid():
                if request.user.is_staff:
                    user = form.cleaned_data['player']
                    user_list = [str(user) for user in User.objects.all()]
                    if user not in user_list:
                        message = 'Enter a valid player.'
                        return render(request, "home.html", {'form': form, 'message': message})
                else:
                    user = request.user
                try:
                    player = Player.objects.get(username=user)
                except:
                    player = Player(username=user)
                map = form.cleaned_data['map']
                time = form.cleaned_data['time'].strip()
                if re.search('^[1-9][:][0-5][0-9][.][0-9][0-9][0-9]$', time) or re.search('^[0-5][0-9][.][0-9][0-9][0-9]$', time) or time.lower() == 'none':
                    if time.lower() == 'none':
                        time = 'N/A'
                    if map == 'cavern':
                        player.cavern = time
                        try:
                            map_player = Cavern.objects.get(
                                username=user)
                        except:
                            map_player = Cavern(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'kraken':
                        player.kraken = time
                        try:
                            map_player = Kraken.objects.get(
                                username=user)
                        except:
                            map_player = Kraken(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'yeti':
                        player.yeti = time
                        try:
                            map_player = Yeti.objects.get(
                                username=user)
                        except:
                            map_player = Yeti(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'dragon':
                        player.dragon = time
                        try:
                            map_player = Dragon.objects.get(
                                username=user)
                        except:
                            map_player = Dragon(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'temple':
                        player.temple = time
                        try:
                            map_player = Temple.objects.get(
                                username=user)
                        except:
                            map_player = Temple(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'shrunk':
                        player.shrunk = time
                        try:
                            map_player = Shrunk.objects.get(
                                username=user)
                        except:
                            map_player = Shrunk(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'mobs':
                        player.mobs = time
                        try:
                            map_player = Mobs.objects.get(
                                username=user)
                        except:
                            map_player = Mobs(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'body':
                        player.body = time
                        try:
                            map_player = Body.objects.get(
                                username=user)
                        except:
                            map_player = Body(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'canyon':
                        player.canyon = time
                        try:
                            map_player = Canyon.objects.get(
                                username=user)
                        except:
                            map_player = Canyon(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'excalibur':
                        player.excalibur = time
                        try:
                            map_player = Excalibur.objects.get(
                                username=user)
                        except:
                            map_player = Excalibur(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'icarus':
                        player.icarus = time
                        try:
                            map_player = Icarus.objects.get(
                                username=user)
                        except:
                            map_player = Icarus(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if map == 'celts':
                        player.celts = time
                        try:
                            map_player = Celts.objects.get(
                                username=user)
                        except:
                            map_player = Celts(username=user)
                        map_player.time = time
                        map_player.time_ms = time_in_ms(time)
                    if player.cavern != 'N/A' and player.kraken != 'N/A' and player.yeti != 'N/A' and player.dragon != 'N/A' and player.temple != 'N/A' and player.shrunk != 'N/A' and player.mobs != 'N/A' and player.body != 'N/A' and player.canyon != 'N/A' and player.excalibur != 'N/A' and player.icarus != 'N/A' and player.celts != 'N/A':
                        player.average = average(player)
                        player.average_ms = average_ms(player)
                    else:
                        player.average = 'N/A'
                        player.average_ms = 'N/A'
                    player.save()
                    map_player.save()
                    return redirect('/')
                else:
                    message = 'Enter a valid time.'
                    return render(request, "home.html", {'form': form, 'message': message})
        else:
            return redirect('/login')
    else:
        if request.user.is_staff:
            form = UpdatePBAdmin()
        else:
            form = UpdatePB()
    message = ''
    return render(request, "home.html", {'form': form, 'message': message}) """
    return render(request, "home.html")


def average(player):
    times = (player.cavern, player.kraken, player.yeti, player.dragon, player.temple, player.shrunk,
             player.mobs, player.body, player.canyon, player.excalibur, player.icarus, player.celts)
    total = 0
    for time in times:
        total += time_in_ms(time)
    return ms_to_time(total / 12)


def average_ms(player):
    times = (player.cavern, player.kraken, player.yeti, player.dragon, player.temple, player.shrunk,
             player.mobs, player.body, player.canyon, player.excalibur, player.icarus, player.celts)
    total = 0
    for time in times:
        total += time_in_ms(time)
    return round(total / 12)


def time_in_ms(time):
    total = 0
    if len(time) == 8:
        total += int(time[0]) * 60000
        total += int(time[2:4]) * 1000
        total += int(time[5:])
    else:
        total += int(time[0:2]) * 1000
        total += int(time[3:])
    return total


def ms_to_time(ms):
    minutes = 0
    seconds = 0
    while ms >= 60000:
        minutes += 1
        ms -= 60000
    while ms >= 1000:
        seconds += 1
        ms -= 1000
    if minutes == 0:
        if round(ms) < 100:
            return str(seconds) + '.0' + str(round(ms))
        if round(ms) < 10:
            return str(seconds) + '.00' + str(round(ms))
        return str(seconds) + '.' + str(round(ms))
    if seconds < 10:
        if round(ms) < 100:
            return str(minutes) + ':' + str(seconds) + '.0' + str(round(ms))
        if round(ms) < 10:
            return str(minutes) + ':' + str(seconds) + '.00' + str(round(ms))
        return str(minutes) + ':0' + str(seconds) + '.' + str(round(ms))
    if round(ms) < 100:
        if round(ms) < 10:
            return str(minutes) + ':' + str(seconds) + '.00' + str(round(ms))
        return str(minutes) + ':' + str(seconds) + '.0' + str(round(ms))
    return str(minutes) + ':' + str(seconds) + '.' + str(round(ms))


@api_view(['GET'])
def getMap(request, map):
    return Response(Player.objects.values('username', 'country', map).order_by(Length(map + '_ms').asc(), map + '_ms'))


@api_view(['POST'])
def submitRecord(request):
    map = request.data['map']
    time = request.data['time']
    time_ms = time_in_ms(time)
    player = Player.objects.get(user=request.data['user'])
    setattr(player, map, time)
    setattr(player, map + '_ms', time_ms)
    if player.body and player.canyon and player.cavern and player.celts and player.dragon and player.excalibur and player.icarus and player.kraken and player.mobs and player.shrunk and player.temple and player.yeti:
        player.average = average(player)
        player.average_ms = average_ms(player)
    player.save()
    return Response('Updated record')


class UserList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def getUserId(request):
    return Response(User.objects.get(username=request.data["username"]).id)


@api_view(['POST'])
def createPlayer(request):
    player = Player(
        user=request.data['user'],
        username=request.data['username'],
        country=request.data['country']
    )
    player.save()
    return Response('Player created')


@api_view(['GET'])
def getWorldRecords(request, map):
    return Response(WorldRecord.objects.filter(map=map).values('map', 'player', 'time', 'video'))


@api_view(['GET'])
def rankings(request):
    return Response(Player.objects.values('username', 'country', 'cavern', 'kraken', 'yeti', 'dragon', 'temple', 'shrunk', 'mobs', 'body', 'canyon', 'excalibur', 'icarus', 'celts', 'average').order_by(Length('average_ms').asc(), 'average_ms'))

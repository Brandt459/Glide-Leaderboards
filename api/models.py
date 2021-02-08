from django.db import models
from django_countries.fields import CountryField

# Create your models here.


class Player(models.Model):
    user = models.IntegerField()
    username = models.CharField(max_length=30)
    country = CountryField(null=True, blank=True)
    cavern = models.CharField(max_length=8, null=True, blank=True)
    cavern_ms = models.IntegerField(null=True, blank=True)
    kraken = models.CharField(max_length=8, null=True, blank=True)
    kraken_ms = models.IntegerField(null=True, blank=True)
    yeti = models.CharField(max_length=8, null=True, blank=True)
    yeti_ms = models.IntegerField(null=True, blank=True)
    dragon = models.CharField(max_length=8, null=True, blank=True)
    dragon_ms = models.IntegerField(null=True, blank=True)
    temple = models.CharField(max_length=8, null=True, blank=True)
    temple_ms = models.IntegerField(null=True, blank=True)
    shrunk = models.CharField(max_length=8, null=True, blank=True)
    shrunk_ms = models.IntegerField(null=True, blank=True)
    mobs = models.CharField(max_length=8, null=True, blank=True)
    mobs_ms = models.IntegerField(null=True, blank=True)
    body = models.CharField(max_length=8, null=True, blank=True)
    body_ms = models.IntegerField(null=True, blank=True)
    canyon = models.CharField(max_length=8, null=True, blank=True)
    canyon_ms = models.IntegerField(null=True, blank=True)
    excalibur = models.CharField(max_length=8, null=True, blank=True)
    excalibur_ms = models.IntegerField(null=True, blank=True)
    icarus = models.CharField(max_length=8, null=True, blank=True)
    icarus_ms = models.IntegerField(null=True, blank=True)
    celts = models.CharField(max_length=8, null=True, blank=True)
    celts_ms = models.IntegerField(null=True, blank=True)
    average = models.CharField(max_length=8, null=True, blank=True)
    average_ms = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.username


class WorldRecord(models.Model):
    map = models.CharField(max_length=9)
    player = models.CharField(max_length=30)
    time = models.CharField(max_length=8)
    video = models.CharField(max_length=100)

    def __str__(self):
        return self.map

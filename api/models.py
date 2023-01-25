from django.db import models
import string
import random


# def generate_unique_code():
#     length = 6

#     while True:
#         code = ''.join(random.choices(string.ascii_uppercase, k=length))
#         if Room.objects.filter(code=code).count() == 0:
#             break

#     return code

# Create your models here.


class Room(models.Model):
    
    name = models.CharField(max_length=222, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.name}'


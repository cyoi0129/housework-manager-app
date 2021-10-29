from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator

class Master(models.Model):
    TYPE_COOK = "cook"
    TYPE_DELIVERY = "delivery"
    TYPE_LAUNDRY = "‎laundry"
    TYPE_WASH = "wash"
    TYPE_BATH = "bath"
    TYPE_SLEEP = "sleep"
    TYPE_CLEAN = "clean"
    TYPE_CHILD = "child"
    TYPE_OTHERS = "others"
    TYPE_SET = (
      (TYPE_COOK, "Cook"),
      (TYPE_DELIVERY, "Delivery"),
      (TYPE_LAUNDRY, "‎Laundry"),
      (TYPE_WASH, "Wash"),
      (TYPE_BATH, "Bath"),
      (TYPE_SLEEP, "Sleep"),
      (TYPE_CLEAN, "Clean"),
      (TYPE_CHILD, "Child"),
      (TYPE_OTHERS, "Others")
    )
    user = models.ForeignKey(get_user_model(), related_name='masters', on_delete=models.CASCADE)
    type = models.CharField(choices=TYPE_SET, default=TYPE_OTHERS, max_length=8)
    name = models.CharField(max_length=32)
    point = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])

    def __repr__(self):
          return "{}".format(self.pk)
    __str__ = __repr__
    

class Task(models.Model):
    PERSON_NONE = "none"
    PERSON_DAD = "dad"
    PERSON_MOM = "mom"
    PERSON_SET = (
      (PERSON_NONE, "None"),
      (PERSON_DAD, "Dad"),
      (PERSON_MOM, "Mom"),
    )
    user = models.ForeignKey(get_user_model(), related_name='tasks', on_delete=models.CASCADE)
    master = models.ForeignKey(Master, related_name='tasks', on_delete=models.CASCADE)
    date = models.DateField()
    person = models.CharField(choices=PERSON_SET, default=PERSON_NONE, max_length=8)

    def __repr__(self):
          return "{}".format(self.pk)
    __str__ = __repr__
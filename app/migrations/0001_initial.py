# Generated by Django 3.2.8 on 2021-10-29 06:09

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Master',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('cook', 'Cook'), ('delivery', 'Delivery'), ('\u200elaundry', '\u200eLaundry'), ('wash', 'Wash'), ('bath', 'Bath'), ('sleep', 'Sleep'), ('clean', 'Clean'), ('child', 'Child'), ('others', 'Others')], default='others', max_length=8)),
                ('name', models.CharField(max_length=32)),
                ('point', models.IntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)])),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='masters', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('person', models.CharField(choices=[('none', 'None'), ('dad', 'Dad'), ('mom', 'Mom')], default='none', max_length=8)),
                ('master', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to='app.master')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tasks', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

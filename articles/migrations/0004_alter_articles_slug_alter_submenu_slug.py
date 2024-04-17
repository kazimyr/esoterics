# Generated by Django 4.2.11 on 2024-04-16 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("articles", "0003_alter_submenu_slug"),
    ]

    operations = [
        migrations.AlterField(
            model_name="articles",
            name="slug",
            field=models.CharField(blank=True, max_length=16, null=True),
        ),
        migrations.AlterField(
            model_name="submenu",
            name="slug",
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
    ]

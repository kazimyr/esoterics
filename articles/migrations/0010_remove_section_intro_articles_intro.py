# Generated by Django 4.2.11 on 2024-04-19 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("articles", "0009_alter_paragraph_content"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="section",
            name="intro",
        ),
        migrations.AddField(
            model_name="articles",
            name="intro",
            field=models.TextField(blank=True),
        ),
    ]
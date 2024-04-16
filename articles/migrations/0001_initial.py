# Generated by Django 4.2.11 on 2024-04-16 10:32

import articles.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Articles",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=128, unique=True)),
                ("slug", models.CharField(max_length=16, unique=True)),
                (
                    "image",
                    models.ImageField(upload_to=articles.models.Articles.img_path),
                ),
                ("description", models.TextField()),
                (
                    "author",
                    models.CharField(max_length=50, verbose_name="Кубекина Е.В."),
                ),
                ("create_date", models.DateField(auto_now=True)),
                ("publish_date", models.DateField(auto_now_add=True)),
            ],
            options={
                "verbose_name": "",
                "verbose_name_plural": "s",
            },
        ),
        migrations.CreateModel(
            name="Menu",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=128, unique=True)),
                ("slug", models.CharField(max_length=16, unique=True)),
            ],
            options={
                "verbose_name": "",
                "verbose_name_plural": "s",
            },
        ),
        migrations.CreateModel(
            name="Submenu",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=128, unique=True)),
                ("slug", models.CharField(max_length=16, unique=True)),
                ("description", models.TextField()),
                (
                    "menu_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT, to="articles.menu"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Section",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("header", models.CharField(max_length=128, unique=True)),
                ("body", models.TextField()),
                (
                    "image",
                    models.ImageField(upload_to=articles.models.Section.img_path),
                ),
                (
                    "articles_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        to="articles.articles",
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="articles",
            name="submenu_id",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.PROTECT, to="articles.submenu"
            ),
        ),
    ]
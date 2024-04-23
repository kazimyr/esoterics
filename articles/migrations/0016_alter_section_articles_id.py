# Generated by Django 4.2.11 on 2024-04-23 09:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("articles", "0015_alter_section_articles_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="section",
            name="articles_id",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.PROTECT,
                related_name="sections",
                related_query_name="sections",
                to="articles.articles",
            ),
        ),
    ]

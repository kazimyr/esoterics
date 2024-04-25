from django.shortcuts import render
from sacral.services.infra import head_meta, colors
from articles.models import *


def home(request):
    context = {'title' : 'Эзотерика'}
    return render(request, 'articles/index.html', context)

def menu(request, menu_slug):
    menu_item = Menu.objects.get(slug=menu_slug)
    context = {
                'title' : menu_item.name,
                'topics' : menu_item.submenu_set.all(),
                'colors' : colors(menu_item.get_absolute_url())
              }
    return render(request, 'articles/main.html', context)

def submenu(request, menu_slug, submenu_slug):
    submenu_item = Menu.objects.get(slug=menu_slug).submenu_set.get(slug=submenu_slug)
    context = {
                'title' : submenu_item.name,
                'topics' : submenu_item.articles_set.all(),
                'colors' : colors(submenu_item.get_absolute_url())
              }
    return render(request, 'articles/main.html', context)

def article(request, menu_slug, submenu_slug, article_slug):
    article_item = Menu.objects.get(slug=menu_slug).submenu_set.get(slug=submenu_slug).articles_set.get(slug=article_slug)
    context = {
                'title' : article_item.name,
                'topics' : article_item.section_set.filter(section_id=None),
                'article' : article_item,
                'colors' : colors(article_item.get_absolute_url())
              }
    return render(request, 'articles/main_article.html', context)

from django.shortcuts import render
from articles.models import *


def colors(pattern):
    menu_item = Menu.objects.get(slug=pattern.split('/')[1])
    return {
        'bg_header': menu_item.image_header,
        'bg_main' : menu_item.image_main,
        'bg_footer' : menu_item.image_footer,
        'base_color' : menu_item.base_color,
        'bg_color' : menu_item.bg_color
    }


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
                'topics' : article_item.section_set.all(),
                'article' : article_item,
                'colors' : colors(article_item.get_absolute_url())
              }
    return render(request, 'articles/main.html', context)
    
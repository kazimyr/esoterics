from django.shortcuts import render
from articles.models import Menu, Submenu


def home(request):
    context = {'title' : 'Эзотерика'}
    return render(request, 'articles/index.html', context)

def menu(request, menu):
    menu_item = Menu.objects.get(slug=menu)
    context = {
                'title' : menu_item.name,
                'topics' : menu_item.submenu_set.all()
              }
    return render(request, 'articles/main.html', context)

def submenu(request, menu, submenu):
    submenu_item = Menu.objects.get(slug=menu).submenu_set.get(slug=submenu)
    context = {
                'title' : submenu_item.name,
                'topics' : submenu_item.articles_set.all()
              }
    return render(request, 'articles/main.html', context)

def article():
    pass
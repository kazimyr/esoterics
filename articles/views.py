from django.shortcuts import render


def home(request):
    context = {'title' : 'Эзотерика'}
    return render(request, 'articles/index.html', context)

def menu(request, slug):
    context = {'title' : 'История эзотерики'}
    return render(request, 'articles/main.html', context)

def submenu():
    pass

def article():
    pass
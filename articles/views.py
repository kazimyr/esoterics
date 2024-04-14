from django.shortcuts import render


def home(request):
    context = {'title' : 'Эзотерика'}
    return render(request, 'articles/index.html', context)

def history(request):
    context = {'title' : 'История эзотерики'}
    return render(request, 'articles/base.html', context)
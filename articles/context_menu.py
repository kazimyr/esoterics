
from articles.models import Menu

def menu(request):
    return {
        'menu_items': Menu.objects.all(),
        # 'submenu_items': Submenu.objects.all()
        }
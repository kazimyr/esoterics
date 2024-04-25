from articles.models import *


def head_meta(path):
    pass

def colors(pattern):
    menu_item = Menu.objects.get(slug=pattern.split('/')[1])
    return {
        'bg_header': menu_item.image_header,
        'bg_main' : menu_item.image_main,
        'bg_footer' : menu_item.image_footer,
        'base_color' : menu_item.base_color,
        'bg_color' : menu_item.bg_color
    }

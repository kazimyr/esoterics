from django.contrib import admin

from articles.models import Menu, Submenu, Articles, Section

admin.site.register(Menu)
admin.site.register(Submenu)
admin.site.register(Articles)
admin.site.register(Section)

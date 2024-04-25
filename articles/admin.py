from django.contrib import admin

from articles.models import *

class ArticlesAdmin(admin.ModelAdmin):
    list_display = ('id', '__str__', 'publish_date')
    list_display_links = ('id', '__str__')
    search_fields = ('name', 'intro')

class SectionAdmin(admin.ModelAdmin):
    list_display = ('id', '__str__', 'articles_id', 'image')
    list_display_links = ('id', '__str__')
    search_fields = ('header', 'top_text', 'bottom_text')

admin.site.register(Menu)
admin.site.register(Submenu)
admin.site.register(Articles, ArticlesAdmin)
admin.site.register(Section, SectionAdmin)

from django.contrib import admin

from articles.models import *

admin.site.register(Menu)
admin.site.register(Submenu)
admin.site.register(Articles)
admin.site.register(Section)
admin.site.register(Paragraph)


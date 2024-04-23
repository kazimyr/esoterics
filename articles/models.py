from django.db import models
from django.urls import reverse

class Menu(models.Model):
    name = models.CharField(max_length=128, unique=True)
    slug = models.CharField(max_length=16, unique=True)
    image_header = models.CharField(max_length=64)
    image_main = models.CharField(max_length=64)
    image_footer = models.CharField(max_length=64)
    base_color = models.CharField(max_length=16)
    bg_color = models.CharField(max_length=16)

    def get_absolute_url(self):
        return reverse(
                        'menu',
                        kwargs=
                                {
                                    'menu_slug': self.slug
                                }
                            )

    class Meta:
        ordering = ('pk',)
    #     verbose_name = ("")
    #     verbose_name_plural = ("")

    def __str__(self):
        return str(self.name)


class Submenu(models.Model):
    name = models.CharField(max_length=128,unique=True)
    slug = models.CharField(max_length=64, null=True, blank=True)
    description = models.TextField()
    menu_id = models.ForeignKey(to=Menu, on_delete=models.PROTECT)

    def get_absolute_url(self):
        return reverse(
                        'submenu',
                        kwargs=
                                {
                                    'menu_slug': self.menu_id.slug,
                                    'submenu_slug': self.slug
                                }
                        )


    class Meta:
        ordering = ('pk',)
    #     verbose_name = ("")
    #     verbose_name_plural = ("")


    def __str__(self):
        return f'{self.menu_id.get_absolute_url()}{self.name}'



class Articles(models.Model):
    def get_absolute_url(self):
        return reverse(
                        'article',
                        kwargs=
                                {
                                    'menu_slug': self.submenu_id.menu_id.slug,
                                    'submenu_slug': self.submenu_id.slug,
                                    'article_slug': self.slug
                                }
                        )

    def img_path(self, filename):
        return f'img/{self.get_absolute_url()}/{self.pk}.' + filename.split('.')[1]


    name = models.CharField(max_length=128,unique=True)
    slug = models.CharField(max_length=16, null=True, blank=True)
    image = models.ImageField(upload_to=img_path, blank=True)
    description = models.TextField()
    intro = models.TextField(blank=True)
    author = models.CharField( max_length=50, default='Елена Кубекина')
    create_date = models.DateField(auto_now=True)
    publish_date = models.DateField(auto_now_add=True)
    submenu_id = models.ForeignKey(to=Submenu, on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.submenu_id.get_absolute_url()}{self.name}'

    class Meta:
        ordering = ('pk',)
    #     verbose_name = ("")
    #     verbose_name_plural = ("")



class Section(models.Model):
    def img_path(self, filename):
        return f'img/{self.articles_id.get_absolute_url()}/{self.articles_id.pk}-{self.section_id.pk if self.section_id else ""}-{self.pk}.' + filename.split('.')[1]

    header = models.CharField(max_length=128,unique=True)
    articles_id = models.ForeignKey(Articles, on_delete=models.PROTECT)
    image = models.ImageField(upload_to=img_path, blank=True)
    top_text = models.TextField(null=True)
    bottom_text = models.TextField(null=True, blank=True)
    section_id = models.ForeignKey('self', on_delete=models.PROTECT, related_name='myself', null=True, blank=True)


    def __str__(self):
        return f'{self.articles_id.get_absolute_url()}/{self.header}'

    class Meta:
        ordering = ('pk',)
    #     verbose_name = ("")
    #     verbose_name_plural = ("")


# class Paragraph(models.Model):
#     content = models.TextField()
#     section_id = models.ForeignKey(Section, on_delete=models.PROTECT)

#     def __str__(self):
#         return f'{self.section_id.header}-{self.pk}'

#     class Meta:
#         ordering = ('pk',)
    #     verbose_name = ("")
    #     verbose_name_plural = ("")

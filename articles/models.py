from django.db import models
from django.urls import reverse

class Menu(models.Model):
    name = models.CharField(max_length=128, unique=True)
    slug = models.CharField(max_length=16, unique=True)

    def get_absolute_url(self):
        return reverse(
                        'menu',
                        kwargs=
                                {
                                    'menu': self.slug
                                }
                            )
 
    # class Meta:
    #     verbose_name = ("")
    #     verbose_name_plural = ("s")

    def __str__(self):
        return self.name



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
                                    'menu': self.menu_id.slug,
                                    'submenu': self.slug
                                }
                        )


    def __str__(self):
        return self.name



class Articles(models.Model):
    def img_path(self, filename):
        return f'img/articles/{self.slug}/{filename}'


    name = models.CharField(max_length=128,unique=True)
    slug = models.CharField(max_length=16, null=True, blank=True)
    image = models.ImageField(upload_to=img_path, blank=True)
    description = models.TextField()
    author = models.CharField( max_length=50, default='Кубекина Е.В.')
    create_date = models.DateField(auto_now=True)
    publish_date = models.DateField(auto_now_add=True)
    submenu_id = models.ForeignKey(to=Submenu, on_delete=models.PROTECT)


    def get_absolute_url(self):
        return reverse(
                        'article',
                        kwargs=
                                {
                                    'menu': self.submenu_id.menu_id.slug,
                                    'submenu': self.submenu_id.slug,
                                    'article': self.slug
                                }
                        )


    def __str__(self):
        return self.name
    

    # class Meta:
    #     verbose_name = ("")
    #     verbose_name_plural = ("s")



class Section(models.Model):
    def img_path(instance, filename):
        return f'img/articles/{instance.articles_id.name}/{filename}'


    header = models.CharField(max_length=128,unique=True)
    body = models.TextField()
    articles_id = models.ForeignKey(Articles, on_delete=models.PROTECT)
    image = models.ImageField(upload_to=img_path, blank=True)

    def __str__(self):
        return self.header


from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length=128, unique=True)
    slug = models.CharField(max_length=16, unique=True)

 
    # class Meta:
    #     verbose_name = ("")
    #     verbose_name_plural = ("s")

    def __str__(self):
        return self.name

    # def get_absolute_url(self):
    #     return reverse("_detail", kwargs={"pk": self.pk})


class Submenu(models.Model):
    name = models.CharField(max_length=128,unique=True)
    slug = models.CharField(max_length=64, null=True, blank=True)
    description = models.TextField()
    menu_id = models.ForeignKey(to=Menu, on_delete=models.PROTECT)


    def __str__(self):
        return self.name



class Articles(models.Model):
    def img_path(instance, filename):
        return f'img/articles/{instance.name}/{filename}'


    name = models.CharField(max_length=128,unique=True)
    slug = models.CharField(max_length=16, null=True, blank=True)
    image = models.ImageField(upload_to=img_path, blank=True)
    description = models.TextField()
    author = models.CharField( max_length=50, default='Кубекина Е.В.')
    create_date = models.DateField(auto_now=True)
    publish_date = models.DateField(auto_now_add=True)
    submenu_id = models.ForeignKey(to=Submenu, on_delete=models.PROTECT)


    def __str__(self):
        return self.name
    

    # class Meta:
    #     verbose_name = ("")
    #     verbose_name_plural = ("s")

    # def get_absolute_url(self):
    #     return reverse("_detail", kwargs={"pk": self.pk})


class Section(models.Model):
    def img_path(instance, filename):
        return f'img/articles/{instance.articles_id.name}/{filename}'


    header = models.CharField(max_length=128,unique=True)
    body = models.TextField()
    articles_id = models.ForeignKey(Articles, on_delete=models.PROTECT)
    image = models.ImageField(upload_to=img_path, blank=True)

    def __str__(self):
        return self.header


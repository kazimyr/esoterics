from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length=128, unique=True)
    slug = models.CharField(max_length=16, unique=True)

 
    # class Meta:
    #     verbose_name = ("")
    #     verbose_name_plural = ("s")

    # def __str__(self):
    #     return self.name

    # def get_absolute_url(self):
    #     return reverse("_detail", kwargs={"pk": self.pk})


class Submenu(models.Model):
    name = models.CharField(max_length=128,unique=True)
    slug = models.CharField(max_length=16, unique=True)
    description = models.TextField()
    menu_id = models.ForeignKey(to=Menu, on_delete=models.PROTECT)


class Articles(models.Model):
    def img_path(instance, filename):
        return f'img/articles/{isinstance.name}/{filename}'


    name = models.CharField(max_length=128,unique=True)
    slug = models.CharField(max_length=16, unique=True)
    image = models.ImageField(upload_to=img_path)
    description = models.TextField()
    author = models.CharField(("Кубекина Е.В."), max_length=50)
    create_date = models.DateField(auto_now=True)
    publish_date = models.DateField(auto_now_add=True)
    submenu_id = models.ForeignKey(to=Submenu, on_delete=models.PROTECT)
    

    # class Meta:
    #     verbose_name = ("")
    #     verbose_name_plural = ("s")

    # def __str__(self):
    #     return self.name

    # def get_absolute_url(self):
    #     return reverse("_detail", kwargs={"pk": self.pk})


class Section(models.Model):
    def img_path(instance, filename):
        return f'img/articles/{isinstance.articles_id.name}/{filename}'


    header = models.CharField(max_length=128,unique=True)
    body = models.TextField()
    articles_id = models.ForeignKey(Articles, on_delete=models.PROTECT)
    image = models.ImageField(upload_to=img_path)

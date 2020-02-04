from django.db import models

class Product(models.Model):
    product_id=models.AutoField
    product_name=models.CharField(max_length=30)
    product_description=models.CharField(max_length=300)
    published_date=models.DateField()
    category=models.CharField(max_length=50,default="")
    subcategory=models.CharField(max_length=50,default="")
    price=models.IntegerField(default=0)
    image=models.ImageField(upload_to="shop/images",default="")

    def __str__(self):
        return self.product_name

class Contact(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=50,default='')
    email=models.CharField(max_length=50,default='')
    phoneNumber=models.CharField(max_length=50,default='')
    desc=models.CharField(max_length=300,default='')


    def __str__(self):
        return self.name
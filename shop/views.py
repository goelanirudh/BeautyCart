from django.shortcuts import render
from django.http import HttpResponse
from math import ceil
from .models import Product, Contact

def index(request):
    # products=Product.objects.all()

    # print(products)

    # params={
    #     'products':products,
    #     'numberOfSlides':nSlides,
    #     'range':range(1,nSlides),
    #  }

    # allProducts=[
    #     [products,range(1,nSlides),nSlides],
    #     [products,range(1,nSlides),nSlides],
    # ]
    # params={
    #     'allProducts':allProducts
    # }

    allProducts=[]
    categorProduct=Product.objects.values('category')
    categories={item['category'] for item in categorProduct}
    for catgry in categories:
        prod=Product.objects.filter(category=catgry)
        slidesCount=len(prod)
        nSlides=slidesCount//4+ceil((slidesCount/4)-(slidesCount//4))
        allProducts.append([prod,range(1,nSlides),nSlides])

    params={
    'allProducts':allProducts
    }

    return render(request,'shop/index.html',params)

def about(request):
    return render(request,'shop/about.html')

def contact(request):
    if request.method=='POST':
        print(request)
        # in get instring word represent name in html tag that we given
        name=request.POST.get('name','')
        email=request.POST.get('email','')
        phoneNumber=request.POST.get('phone','')
        desc=request.POST.get('desc','')

        contact=Contact(name=name,email=email,phoneNumber=phoneNumber,desc=desc)
        contact.save()

    return render(request,'shop/contact.html')

def tracker(request):
    return render(request,'shop/tracker.html')

def search(request):
    return render(request,'shop/search.html')

def product(request ,myid):
    # Fetching id based on the product
    product=Product.objects.filter(id=myid)
    print(product)
    return render(
        request,
        'shop/product.html',
        {
            'product':product[0]
        },
        )

def checkout(request):
    return render(request,'shop/checkout.html')
from django.db import models
from hamsterapp.models import SpeciesModel


class HamsterModel(models.Model):
    """
    Here, we define a hamster model. It is just like a database table, if you have worked with those before.
    By calling on the methods of the models, we can later interact with our database. This database abstraction is one
    of Django's most powerful features, as we don't have to think about the underlying database - we just work with
    our models.

    In technical terms, this concept is called Object-Relational Mapping (ORM):
    https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping

    You can read more about Django models here:
    https://docs.djangoproject.com/en/4.0/topics/db/models/

    A model can have multiple fields (attributes). For example, a hamster can have a name and a date of birth.
    There are many different types of fields that a model can have. Read more about fields here:
    https://docs.djangoproject.com/en/4.0/ref/models/fields/
    """
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=350, blank=True)
    date_of_birth = models.DateField()
    # Image will be saved to MEDIA_ROOT/hamster_images/2022/01 if saved in january 2022
    image = models.ImageField(upload_to="hamster_images/%Y/%m")
    species = models.ForeignKey(SpeciesModel, on_delete=models.SET_NULL, null=True)

    objects = models.Manager()

    class Meta:
        """ Here, we can define some metadata about the model, such as the model's verbose name.
         If we hadn't defined the verbose name, the admin panel would just call the model "hamster", and "hamsters"
         in plural form."""
        verbose_name = "Really cute hamster"
        verbose_name_plural = "Really cute hamsters"

    def __str__(self):
        """ This method is actually quite important. Without it, in the admin panel, we would just see
         "Hamster Object 1" or "Hamster Object 2" instead of the hamster's name."""
        return self.name

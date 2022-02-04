from rest_framework.routers import SimpleRouter
from hamsterapp.views import HamsterViewSet, SpeciesViewSet, WeightRecordViewSet

"""
The urls will be matched from top to bottom, so the ones registered first will be compared first to our URL.
If we had registered "" before "species", then with the request 
    GET 127.0.0.1:8000/hamsters/species
Django would think that "species" is an id that we are trying to send to the HamsterViewSet, and it would throw an 
error, because "species" is not a valid hamster id.
"""

router = SimpleRouter()
router.register("species", SpeciesViewSet, basename="species")
router.register("weight_records", WeightRecordViewSet, basename="weight_records")
router.register("", HamsterViewSet, basename="hamster")

urlpatterns = router.urls

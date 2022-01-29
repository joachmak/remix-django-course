from rest_framework.routers import SimpleRouter
from hamsterapp.views import HamsterViewSet

router = SimpleRouter()
router.register("", HamsterViewSet, basename="hamster")

urlpatterns = router.urls

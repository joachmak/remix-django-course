import os
import logging
from django.conf import settings


logger = logging.getLogger(__name__)


def remove_hamster_image(image_path):
    try:
        full_image_path = os.path.join(settings.MEDIA_ROOT, image_path)
        os.remove(full_image_path)
    except FileNotFoundError:
        logger.info(f"Hamster has no image!")
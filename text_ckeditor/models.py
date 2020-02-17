from djangocms_text_ckeditor.settings import CKEDITOR_SETTINGS
from django.conf import settings


EDITOR_ADD = [
    '/static/bootstrap.css',
    '/static/fontawesome.css',
]

EDITOR_ADD = getattr(settings, "EDITOR_ADD", EDITOR_ADD)
EDITOR_STYLE_SET = getattr(settings, "EDITOR_STYLE_SET", 'default:/static/djangocms_text_ckeditor/custom_styles.js')

CKEDITOR_SETTINGS['contentsCss'] = EDITOR_ADD
CKEDITOR_SETTINGS['styleSet'] = EDITOR_STYLE_SET
CKEDITOR_SETTINGS['toolbarCanCollapse'] = False
CKEDITOR_SETTINGS['allowedContent'] = True

# CKEDITOR_SETTINGS = {
#     'language': '{{ language }}',
#     'stylesSet': 'default:/static/djangocms_text_ckeditor/custom_styles.js',
#     'toolbarCanCollapse': False,
#     'allowedContent': True,
# }
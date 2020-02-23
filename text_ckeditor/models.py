from djangocms_text_ckeditor.settings import CKEDITOR_SETTINGS
from django.conf import settings
import os
from django_libsass import compile


static_path = settings.STATIC_ROOT
BS_PATH =  os.path.join(settings.BASE_DIR, 'design', 'static', 'design', 'style.scss')
FA_PATH = os.path.join(settings.BASE_DIR, 'text_ckeditor', 'static', 'font-awesome', 'scss', 'fontawesome.scss')

BS_PATH = getattr(settings, "BS_PATH", BS_PATH)
FA_PATH = getattr(settings, "FA_PATH", FA_PATH)

BS_CACHE_PATH = "{}/bootstrap.css".format(static_path)
FA_CACHE_PATH = "{}/fontawesome.css".format(static_path)

BS_CACHE_PATH = getattr(settings, "BS_CACHE_PATH", BS_CACHE_PATH)
FA_CACHE_PATH = getattr(settings, "FA_CACHE_PATH", FA_CACHE_PATH)

EDITOR_ADD = [
    BS_CACHE_PATH,
    FA_CACHE_PATH,
]

def create_scss():
    # todo добавить после изменения стилей чтоб еще менялось
    try:
        # bootstrap.css
        with open(BS_CACHE_PATH, 'w') as f:
            f.write(compile(filename=BS_PATH, output_style='nested', source_comments=True))
        # os.system(cmd)
        # font-awesome
        with open(FA_CACHE_PATH, 'w') as f:
            f.write(compile(filename=FA_PATH, output_style='nested', source_comments=True))
    except Exception as e:
        print(e)


create_scss()



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
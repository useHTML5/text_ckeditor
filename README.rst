Installation
============

Wraps default ckeditor plugin in class .ckeditor_text and add some new styles to editor panel.

::

    git+https://github.com/useHTML5/text_ckeditor.git@0.5#egg=text_ckeditor # галерея

    pip install djangocms-light-gallery

    INSTALLED_APPS = [
    // ...
    'text_ckeditor', # self djangocms_text_ckeditor
    'djangocms_text_ckeditor',  # cms
    '',
    // ...

    COMPRESS_PRECOMPILERS = (
        ('text/x-scss', 'django_libsass.SassCompiler'),
    )

    python manage.py migrate text_ckeditor


..

Install
=====

INSTALLED_APPS = (
    ...
    'text_ckeditor', # self
    'djangocms_text_ckeditor',  # cms
    ...
}

CKEDITOR_SETTINGS = {
    'language': '{{ language }}',
    'stylesSet': 'default:/static/djangocms_text_ckeditor/custom_styles.js',
    'toolbarCanCollapse': False,
    'allowedContent': True,
}
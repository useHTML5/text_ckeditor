#coding: utf-8
from setuptools import setup, find_packages

setup(
    name="text_ckeditor",
    version="0.2",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'djangocms-text-ckeditor',  # плагин текста
    ],
)

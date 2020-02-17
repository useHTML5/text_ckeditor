/**
 * Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin which shows the Styles drop-down
// list containing all styles in the editor toolbar. Other plugins, like
// the "div" plugin, use a subset of the styles for their features.
//
// If you do not have plugins that depend on this file in your editor build, you can simply
// ignore it. Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.
//
// For more information refer to: http://docs.ckeditor.com/#!/guide/dev_styles-section-style-rules

CKEDITOR.stylesSet.add('default', [
    /* Block styles */

    // These styles are already available in the "Format" drop-down list ("format" plugin),
    // so they are not needed here by default. You may enable them to avoid
    // placing the "Format" combo in the toolbar, maintaining the same features.
    /*

    { name: 'Preformatted Text',element: 'pre' },
    { name: 'Address',			element: 'address' },
    */
    {name: 'Цветной список', element: 'ul', attributes: {'class': 'color_list'}},
    {name: 'Параграф', element: 'p'},
    {name: 'h1', element: 'h1'},
    {name: 'h2', element: 'h2'},
    {name: 'h3', element: 'h3'},
    {name: 'h4', element: 'h4'},
    {name: 'h5', element: 'h5'},
    {name: 'h6', element: 'h6'},
    //div.h*

    // {name: 'Text-primary', element: 'span', attributes: {'class': 'text-primary'}},
    {name: 'div.h1', element: 'div', attributes: {'class': 'h1'}},
    {name: 'div.h2', element: 'div', attributes: {'class': 'h2'}},
    {name: 'div.h3', element: 'div', attributes: {'class': 'h3'}},
    {name: 'div.h4', element: 'div', attributes: {'class': 'h4'}},
    {name: 'div.h5', element: 'div', attributes: {'class': 'h5'}},
    {name: 'div.h6', element: 'div', attributes: {'class': 'h6'}}
    //\div.h*

    // {name: 'Italic Title', element: 'h2', styles: {'font-style': 'italic'}},
    // {name: 'Subtitle', element: 'h3', styles: {'color': '#aaa', 'font-style': 'italic'}},
    // {
    //     name: 'Special Container',
    //     element: 'div',
    //     styles: {
    //         padding: '5px 10px',
    //         background: '#eee',
    //         border: '1px solid #ccc'
    //     }
    // },

    /* Inline styles */

    // These are core styles available as toolbar buttons. You may opt enabling
    // some of them in the Styles drop-down list, removing them from the toolbar.
    // (This requires the "stylescombo" plugin.)
    /*
    { name: 'Strong',			element: 'strong', overrides: 'b' },
    { name: 'Emphasis',			element: 'em'	, overrides: 'i' },
    { name: 'Underline',		element: 'u' },
    { name: 'Strikethrough',	element: 'strike' },
    { name: 'Subscript',		element: 'sub' },
    { name: 'Superscript',		element: 'sup' },
    */

    // {name: 'Marker', element: 'span', attributes: {'class': 'marker'}},

    // {name: 'Big', element: 'big'},
    // {name: 'Small', element: 'small'},
    // {name: 'Typewriter', element: 'tt'},

    // {name: 'Computer Code', element: 'code'},
    // {name: 'Keyboard Phrase', element: 'kbd'},
    // {name: 'Sample Text', element: 'samp'},
    // {name: 'Variable', element: 'var'},
    //
    // {name: 'Deleted Text', element: 'del'},
    // {name: 'Inserted Text', element: 'ins'},
    //
    // {name: 'Cited Work', element: 'cite'},
    // {name: 'Inline Quotation', element: 'q'},
    //
    // {name: 'Language: RTL', element: 'span', attributes: {'dir': 'rtl'}},
    // {name: 'Language: LTR', element: 'span', attributes: {'dir': 'ltr'}},

    /* Object styles */

    // {
    //     name: 'Styled Image (left)',
    //     element: 'img',
    //     attributes: {'class': 'left'}
    // },
    //
    // {
    //     name: 'Styled Image (right)',
    //     element: 'img',
    //     attributes: {'class': 'right'}
    // },

    // {
    //     name: 'Compact Table',
    //     element: 'table',
    //     attributes: {
    //         cellpadding: '5',
    //         cellspacing: '0',
    //         border: '1',
    //         bordercolor: '#ccc'
    //     },
    //     styles: {
    //         'border-collapse': 'collapse'
    //     }
    // },

    // {name: 'Borderless Table', element: 'table', styles: {'border-style': 'hidden', 'background-color': '#E6E6FA'}},
    // {name: 'Square Bulleted List', element: 'ul', styles: {'list-style-type': 'square'}},

    /* Widget styles */

    // {name: 'Clean Image', type: 'widget', widget: 'image', attributes: {'class': 'image-clean'}},
    // {name: 'Grayscale Image', type: 'widget', widget: 'image', attributes: {'class': 'image-grayscale'}},

    // {name: 'Featured Snippet', type: 'widget', widget: 'codeSnippet', attributes: {'class': 'code-featured'}},

    // {name: 'Featured Formula', type: 'widget', widget: 'mathjax', attributes: {'class': 'math-featured'}},

    // {name: '240p', type: 'widget', widget: 'embedSemantic', attributes: {'class': 'embed-240p'}, group: 'size'},
    // {name: '360p', type: 'widget', widget: 'embedSemantic', attributes: {'class': 'embed-360p'}, group: 'size'},
    // {name: '480p', type: 'widget', widget: 'embedSemantic', attributes: {'class': 'embed-480p'}, group: 'size'},
    // {name: '720p', type: 'widget', widget: 'embedSemantic', attributes: {'class': 'embed-720p'}, group: 'size'},
    // {name: '1080p', type: 'widget', widget: 'embedSemantic', attributes: {'class': 'embed-1080p'}, group: 'size'},

    // Adding space after the style name is an intended workaround. For now, there
    // is no option to create two styles with the same name for different widget types. See http://dev.ckeditor.com/ticket/16664.
    // {name: '240p ', type: 'widget', widget: 'embed', attributes: {'class': 'embed-240p'}, group: 'size'},
    // {name: '360p ', type: 'widget', widget: 'embed', attributes: {'class': 'embed-360p'}, group: 'size'},
    // {name: '480p ', type: 'widget', widget: 'embed', attributes: {'class': 'embed-480p'}, group: 'size'},
    // {name: '720p ', type: 'widget', widget: 'embed', attributes: {'class': 'embed-720p'}, group: 'size'},
    // {name: '1080p ', type: 'widget', widget: 'embed', attributes: {'class': 'embed-1080p'}, group: 'size'}

]);

//Убираем удаление пустых тегов
CKEDITOR.dtd.$removeEmpty.span = 0;

// dataProcessor.htmlFilter.addRules( {
//     elements: {
//         ul: function( el ) {
//             if ( !el.attributes.class) {
//                 el.attributes['class'] = 'colored_list';
//             }
//         },
//         li: function( el ) {
//             if ( !el.attributes.class) {
//                 el.attributes['class'] = 'colored_list';
//             }
//         }
//     }
// });
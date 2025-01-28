var txt=`
<html>
<head>
        <title>DataWorks | Backend compute for businesses</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- <link rel="manifest" href="wp-content/themes/dataworks/dist/manifest.json" /> -->
        <link rel="shortcut icon" href="/wp-content/themes/dataworks/dist/favicon/favicon.png" />
        <link rel="prefetch" href="/wp-content/themes/dataworks/dist/bundle.7f4b.js">
        <link rel="prerender " href="/?background=true&light=true">
</head>
</html>`.replace(/<head>[^]+<\/head>/, '')
console.log('::TXT::', [txt])
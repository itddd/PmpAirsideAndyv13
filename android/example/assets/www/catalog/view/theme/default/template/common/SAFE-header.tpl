<!DOCTYPE html>
<!-- ============================ J.O. 12-JUN-2013 ========================= -->
<!--
/* * ****************************************************************************
  #                         Palm Therapies Booking v1.1
  #******************************************************************************
  #      Author:     Julius Olatokunbo (http://www.raiiar.co.uk)
  #
  #      Written:    Sunday 12 MAY 2013
  #
  #      Reason:     Online Massage Booking System website requirement for Porsce
  #
  #      Website:    http://www.raiiar.co.uk
  #
  #      Support:    http://http://www.raiiar.co.uk/helpdesk
  #
  #      Version:    1.1
  #
  #      Copyright:   (c) 2009 - 2012  Raiiar.Co.Uk
  #
  #	     Icons from PixelMixer - http://pixel-mixer.com/basic_set/ 
  #
  #      History:    
  #      Date               -   Description
  #      Sunday 12 MAy 2013 -   Original Version 
  #
  #****************************************************************************** */
-->
<!-- ============================ J.O. 12-JUN-2013 ========================= -->
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<head>
<meta charset="UTF-8" />
<!-- ============================ J.O. 12-JUN-2013 ========================= -->
<base href="<?php echo $base; ?>" />
<!-- base href="http://www.raiiar.co.uk/porsche/" -->
<title><?php echo $title; ?></title>
<title>Palm Therapies Booking</title>

<?php if ($description) { ?>
<meta name="description" content="<?php echo $description; ?>" />
<?php } ?>
<?php if ($keywords) { ?>
<meta name="keywords" content="<?php echo $keywords; ?>" />
<?php } ?>
<meta name="description" content="Palm Therapies Booking, moible massage, massage, mobile massage, london mobile massage, london massage, massage in london, the london mobile massage,massage therapists,massage therapist, The greatest wealth is health, touch the body. Calm the mind. Heal the spirit. The London Mobile Massage we provide a mobile massage service for those stressful days when you don't have the energy to leave your home office or hotel but need a pair of healing hands, hot stones massage, relaxation massage, sweedish massage, sports massage, couples massage, sports massage, jade massage bed, kew melbourne, Massage Therapies Deep tissue Myofascial release Muscle energy technique Positional release technique Cupping PNF stretching Manual lymphatic drainage Anxiety Back pain Constipation Headache Insomnia Arthritis Chronic pain Depression High blood pressure, Another website created by Julius Olatokunbo">
<meta name="keywords" content="Palm Therapies Booking, moible massage, massage, mobile massage, london mobile massage, london massage, massage in london, the london mobile massage,massage therapists,massage therapist, The greatest wealth is health, touch the body. Calm the mind. Heal the spirit. The London Mobile Massage we provide a mobile massage service for those stressful days when you don't have the energy to leave your home office or hotel but need a pair of healing hands, hot stones massage, relaxation massage, sweedish massage, sports massage, couples massage, sports massage, jade massage bed, kew melbourne, Massage Therapies Deep tissue Myofascial release Muscle energy technique Positional release technique Cupping PNF stretching Manual lymphatic drainage Anxiety Back pain Constipation Headache Insomnia Arthritis Chronic pain Depression High blood pressure, Another website created by Julius Olatokunbo">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="author" content="Julius Olatokunbo">
<link href="image/data/logo - Copy.png" rel="icon">
<?php if ($icon) { ?>
<link href="<?php echo $icon; ?>" rel="icon" />
<?php } ?>
<!-- ============================ J.O. 12-JUN-2013 ========================= -->
<?php foreach ($links as $link) { ?>
<link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
<?php } ?>
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/stylesheet.css" />
<?php foreach ($styles as $style) { ?>
<link rel="<?php echo $style['rel']; ?>" type="text/css" href="<?php echo $style['href']; ?>" media="<?php echo $style['media']; ?>" />
<?php } ?>
<script type="text/javascript" src="catalog/view/javascript/jquery/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="catalog/view/javascript/jquery/ui/jquery-ui-1.8.16.custom.min.js"></script>
<link rel="stylesheet" type="text/css" href="catalog/view/javascript/jquery/ui/themes/ui-lightness/jquery-ui-1.8.16.custom.css" />
<script type="text/javascript" src="catalog/view/javascript/common.js"></script>
<?php foreach ($scripts as $script) { ?>
<script type="text/javascript" src="<?php echo $script; ?>"></script>
<?php } ?>
<!--[if IE 7]> 
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/ie7.css" />
<![endif]-->
<!--[if lt IE 7]>
<link rel="stylesheet" type="text/css" href="catalog/view/theme/default/stylesheet/ie6.css" />
<script type="text/javascript" src="catalog/view/javascript/DD_belatedPNG_0.0.8a-min.js"></script>
<script type="text/javascript">
DD_belatedPNG.fix('#logo img');
</script>
<![endif]-->
<?php if ($stores) { ?>
<script type="text/javascript"><!--
$(document).ready(function() {
<?php foreach ($stores as $store) { ?>
$('body').prepend('<iframe src="<?php echo $store; ?>" style="display: none;"></iframe>');
<?php } ?>
});
//--></script>
<?php } ?>
<?php echo $google_analytics; ?>
<!-- ============================ J.O. 12-JUN-2013 ========================= -->

<!--[if lt IE 6 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->



<!-- iPhone Setup -->
<link rel="apple-touch-icon-precomposed" href="image/data/logo_ank.png" />
<link rel="apple-touch-icon" href="image/data/logo_ank.png" />
<link rel="apple-touch-startup-image" href="image/data/splash_320x460.png" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="viewport" content = "width = device-width, initial-scale = 1, minimum-scale = 1, maximum-scale = 5" />

<!-- STYLES -->
<link rel="stylesheet" type="text/css" href="css/fancybox.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/ayumi/stylesheet.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/superfish.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="css/ui.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="css/base.css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/960.css" />
<link rel="stylesheet" type="text/css" href="css/supersized.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/supersized.shutter.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/devices/959.css" media="only screen and (min-width: 768px) and (max-width: 959px)" />
<link rel="stylesheet" type="text/css" href="css/devices/767.css" media="only screen and (min-width: 480px) and (max-width: 767px)" />
<link rel="stylesheet" type="text/css" href="css/devices/479.css" media="only screen and (min-width: 200px) and (max-width: 479px)" />
<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
<!--[if lt IE 9]> <script type="text/javascript" src="js/modernizr.custom.97074.js"></script> <![endif]-->

<!-- Start of StatCounter Code for Default Guide -->
<!-- Start of StatCounter Code for Default Guide -->
<script type="text/javascript">
var sc_project=8943117; 
var sc_invisible=1; 
var sc_security="724a3acd"; 
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script><script type="text/javascript" src="index_massage_booking.php_files/counter.js"></script>
<noscript><div class="statcounter"><a title="free hit
counter" href="http://statcounter.com/" target="_blank"><img
class="statcounter"
src="http://c.statcounter.com/8943117/0/724a3acd/1/"
alt="free hit counter"></a></div></noscript>
<!-- End of StatCounter Code for Default Guide -->
<!-- End of StatCounter Code for Default Guide -->
<!-- ============================ J.O. 12-JUN-2013 ========================= -->
</head>

<body>
<!-- <div id="container"> -->
<!-- ============================ J.O. 12-JUN-2013 ========================= -->
<!-- Body Wrapper -->
<div class="body-wrapper">
    <div class="mask"></div>
    <!-- Header -->
<div id="header">
    <header id="header2">
        <div class="container">
  <?php if ($logo) { ?>
  <div class="logo"><a href="<?php echo $home; ?>"><img src="img/logo.png" title="<?php echo $name; ?>" alt="<?php echo $name; ?>" /></a></div>
  <?php } ?>

<!-- ====== Lang, Curr, Cart & Search ====== -->
<!--
  <?php echo $language; ?>
  <?php echo $currency; ?>
  <?php echo $cart; ?>
  <div id="search">
    <div class="button-search"></div>
    <input type="text" name="search" placeholder="<?php echo $text_search; ?>" value="<?php echo $search; ?>" />
  </div>
-->
<!-- ====== Lang, Curr, Cart & Search ====== -->

<!-- ====== Welcome, Logged & WishLst ====== -->
<!--
  <div id="welcome">
    <?php if (!$logged) { ?>
    <?php echo $text_welcome; ?>
    <?php } else { ?>
    <?php echo $text_logged; ?>
    <?php } ?>
  </div>
  <div class="links"><a href="<?php echo $home; ?>"><?php echo $text_home; ?></a><a href="<?php echo $wishlist; ?>" id="wishlist-total"><?php echo $text_wishlist; ?></a><a href="<?php echo $account; ?>"><?php echo $text_account; ?></a><a href="<?php echo $shopping_cart; ?>"><?php echo $text_shopping_cart; ?></a><a href="<?php echo $checkout; ?>"><?php echo $text_checkout; ?></a></div>
-->
<!-- ====== Welcome, Logged & WishLst ====== -->


<!-- ====== Navigaion Menu ====== -->
<?php if ($categories) { ?>
            <!-- Nav -->
            <nav id="nav">
                <ul class="sf-menu movement">
    <?php foreach ($categories as $category) { ?>
    <li><a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
      <?php if ($category['children']) { ?>
      <div>
        <?php for ($i = 0; $i < count($category['children']);) { ?>
        <ul>
          <?php $j = $i + ceil(count($category['children']) / $category['column']); ?>
          <?php for (; $i < $j; $i++) { ?>
          <?php if (isset($category['children'][$i])) { ?>
          <li><a href="<?php echo $category['children'][$i]['href']; ?>"><?php echo $category['children'][$i]['name']; ?></a></li>
          <?php } ?>
          <?php } ?>
        </ul>
        <?php } ?>
      </div>
      <?php } ?>
    </li>
    <?php } ?>
                </ul>
            </nav>
            <!-- /Nav -->
<?php } ?>
<?php if ($categories) { ?>
            <!-- Mobile Nav -->
            <div class="menu-toggle">
                <a href="#"></a>
            </div>
            <div class="menu-device">
                <ul>
    <?php foreach ($categories as $category) { ?>
    <li><a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
      <?php if ($category['children']) { ?>
      <div>
        <?php for ($i = 0; $i < count($category['children']);) { ?>
        <ul>
          <?php $j = $i + ceil(count($category['children']) / $category['column']); ?>
          <?php for (; $i < $j; $i++) { ?>
          <?php if (isset($category['children'][$i])) { ?>
          <li><a href="<?php echo $category['children'][$i]['href']; ?>"><?php echo $category['children'][$i]['name']; ?></a></li>
          <?php } ?>
          <?php } ?>
        </ul>
        <?php } ?>
      </div>
      <?php } ?>
    </li>
    <?php } ?>
                </ul>
            </div>
            <!-- /Mobile Nav -->
<?php } ?>
<!-- ====== Navigaion Menu ====== -->


            
        </div>
    </header>
</div id="header">
    <!-- /Header -->
<!-- ============================ J.O. 12-JUN-2013 ========================= -->
<div id="notification"></div>

<?php
/**
 * Initiator ( header.php )
 *
 * @package     Initiator
 * @copyright   Copyright (C) 2019. Benjamin Lu
 * @license     GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="profile" href="https://gmpg.org/xfn/11" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="container" class="site-container">
	<header id="header" class="site-header">
		<div class="site-branding">
			<?php Benlumia007\Backdrop\Site\display( 'site-title' ); ?>
			<?php Benlumia007\Backdrop\Site\display( 'site-description' ); ?>
		</div>
		<?php Benlumia007\Backdrop\Menu\display( 'primary' ); ?>
	</header>

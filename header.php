<?php
/**
 * Initiator ( header.php )
 *
 * @package     Initiator
 * @copyright   Copyright (C) 2019. Benjamin Lu
 * @license     GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

use Backdrop\Site\Site as site;
use Backdrop\View\View as menu;
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
<?php wp_body_open(); ?>
<div id="container" class="site-container">
	<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'initiator' ) ?></a>
	<header id="header" class="site-header">
		<div class="site-branding">
			<?php site::display( 'site-title' ); ?>
			<?php site::display( 'site-description' ); ?>
		</div>
		<?php menu::display( 'menu', [ 'primary' ] ); ?>
	</header>

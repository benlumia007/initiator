<?php
/**
 * Initiator ( index.php )
 *
 * The (index.php) template file is very flexible, it can be used to include all the references for the header, content,
 * aside, footer, and other pages created in WordPress. The (index.php) can also be divided into modular template files,
 * each taking on part of the workload. If you wish to not provide any other template files, the WordPress hierarchy may
 * have default template files or functions to perform their jobs.
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
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="container" class="site-container">
	<header id="header" class="site-header">
		<div class="site-branding">
			<?php Benlumia007\Backdrop\Site\display( 'site-title' ); ?>
			<?php Benlumia007\Backdrop\Site\display( 'site-description' ); ?>
		</div>
	</header>
	<section id="content" class="site-content">

	</section>
	<footer id="footer" class="site-footer">
		<div class="site-info">
			<?php
			printf(
				// Translators: 1 = Date, 2 = Site Link.
				esc_html__( 'Copyright &#169; %1$s. %2$s', 'initiator' ),
				absint( date_i18n( 'Y' ) ),
				Benlumia007\Backdrop\Site\display( 'site-link' ) // phpcs:ignore
			);
			?>
			<br />
			<?php
			printf(
				// Translators: 1 = WordPress Link, 2 = Theme Link.
				esc_html__( 'Powered By %1$s and %2$s', 'initiator' ),
				Benlumia007\Backdrop\Site\display( 'wp-link' ), // phpcs:ignore
				Benlumia007\Backdrop\Site\display( 'theme-link' ) // phpcs:ignore
			);
			?>
		</div>
	</footer>
</div>
<?php wp_footer(); ?>
</body>
</html>

<?php
/**
 * Initiator ( archive.php )
 *
 * @package     Initiator
 * @copyright   Copyright (C) 2018-2019. Benjamin Lu
 * @license     GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

?>
<?php get_header(); ?>
	<section id="content" class="site-content">
		<div id="global-layout" class="<?php echo esc_attr( get_theme_mod( 'global_layout', 'no-sidebar' ) ); ?>">
			<main id="main" class="site-main">
				<?php Benlumia007\Backdrop\MainQuery\display( 'content-archive' ); ?>
			</main>
			<?php Benlumia007\Backdrop\Sidebar\display( 'primary' ); ?>
		</div>
	</div>
<?php get_footer(); ?>

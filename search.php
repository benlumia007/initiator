<?php
/**
 * Initiator ( search.php )
 *
 * @package     Initiator
 * @copyright   Copyright (C) 2019. Benjamin Lu
 * @license     GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

use Benlumia007\Backdrop\View\View as sidebar;
?>
<?php get_header(); ?>
	<section id="content" class="site-content">
		<div id="layout" class="<?php echo esc_attr( get_theme_mod( 'global_layout', 'no-sidebar' ) ); ?>">
			<main id="main" class="content-area">
				<?php
					if ( have_posts() ) :
						printf(
							'<h1 class="entry-title">%1$s %2$s</h1>',
							esc_html__( 'Search for: ', 'backdrop-core' ),
							'<span class="search-result">' . get_search_query() . '</span>'
						);
						while ( have_posts() ) : the_post();
							get_template_part( 'views/content/content', get_post_format() );
						endwhile;
						the_posts_pagination();
					else :
							get_template_part( 'views/content/content', 'none' );
					endif;
				?>
			</main>
			<?php sidebar::display( 'sidebar', [ 'primary' ] ); ?>
		</div>
	</section>
<?php get_footer(); ?>

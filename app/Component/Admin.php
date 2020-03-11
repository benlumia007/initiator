<?php // phpcs:ignore
/**
 * Backdrop Core ( Admin.php )
 *
 * @package     Backdrop Core
 * @copyright   Copyright (C) 2019. Benjamin Lu
 * @license     GNU General PUblic License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

namespace Initiator\Component;

use Benlumia007\Backdrop\Contracts\Admin\Admin as AdminPage;

/**
 * Implements Displayable
 */
class Admin extends AdminPage {
	/**
	 * Theme Info
	 */
	private $theme_info = null;
	/**
	 * Construct
	 */
	public function __construct() {
		$this->theme_info = wp_get_theme();
		add_action( 'admin_menu', array( $this, 'menu' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue' ), true, '1.0.0' );
	}
	/**
	 * Register Menu
	 */
	public function menu() {
		add_theme_page( $this->theme_info->name, $this->theme_info->name, 'manage_options', 'theme-page', array( $this, 'callback') );
	}

	/**
	 * Render Menu
	 */
	public function callback() {
		echo '<h1 class="admin-title">' . $this->theme_info->name . '</h1>';
		$this->pages();
	}

	public function tabs( $current = 'introduction' ) {
		$tabs = array(
			'introduction' => esc_html__( 'Introduction', 'backdrop-core' ),
		);

		$admin_nonce = wp_create_nonce( 'admin_nonce' );

		echo '<h2 class="tabs">';
			foreach ( $tabs as $tab => $name ) {
				$class = ( $tab === $current ) ? ' nav-tab-active' : '';
				echo "<a class='nav-tab $class' href='?page=theme-page&tab=$tab&_wp_nonce=$admin_nonce'>$name</a>"; // XSS OK.
			}
		echo '</h2>';
	}

	public function pages() {
		global $pagenow;

		if ( isset( $_GET['tab'] ) && isset( $_GET['_wp_nonce'] ) && false !== wp_verify_nonce( $_GET['_wp_nonce'], 'admin_nonce' ) ) {// WPCS: input var ok.
			$this->tabs( esc_html( wp_unslash( $_GET['tab'] ) ) ); // WPCS: input var ok, sanitization ok.
		} else {
			$this->tabs( 'introduction' );
		}
		echo '<div class="tabs-content">';

		if ( 'themes.php' === $pagenow && 'theme-page' === sanitize_text_field( wp_unslash( $_GET['page'] ) ) ) { // WPCS: input var ok.
			if ( isset( $_GET['tab'] ) && isset( $_GET['_wp_nonce'] ) && false !== wp_verify_nonce( $_GET['_wp_nonce'], 'admin_nonce' ) ) { // WPCS: input var ok, sanitization ok.
				$this->tab = esc_html( wp_unslash( $_GET['tab'] ) ); // WPCS: input var ok, sanitization ok.
			} else {
				$this->tab = 'introduction';
			}

			switch ( $this->tab ) {
				case 'introduction':
					$this->introduction();
					break;
			}
		}
		echo '</div>';
	}

	public function introduction() { ?>
		<h2 class="admin-title"><?php esc_html_e( 'Theme Info', 'backdrop-core' ); ?></h2>
		<ul>
			<li><?php echo esc_html( __('Theme Name: ', 'backdrop-core' ) . $this->theme_info->name ); ?></li>
			<li><?php echo esc_html( __('Theme Version: ', 'backdrop-core' ) . $this->theme_info->version ); ?></li>
		</ul>
		<h2 class="admin-title"><?php esc_html_e( 'Welcome', 'backdrop-core' ); ?></h2>
		<?php esc_html_e( 'Hope you are enjoying the theme. ', 'backdrop-core' ); ?>
		<h2 class="admin-title"><?php esc_html_e( 'Recommended Plugins', 'backdrop-core' ); ?></h2>
		<ul>
			<li><a href="<?php esc_url( 'https://wordpress.org/plugins/jetpack' ); ?>"><?php esc_html_e( 'Jetpack by WordPress.com', 'backdrop-core' ); ?></a></li>
			<li><a href="<?php esc_url( 'https://wordpress.org/plugins/regenerate-thumbnails' ); ?>"><?php esc_html_e( 'Regenerate Thumbnails', 'backdrop-core' ); ?></a></li>
		</ul>
	<?php }

	public function admin_enqueue() {
		wp_register_style( 'admin-style', get_theme_file_uri() . '/assets/css/admin-styles.css', array(), '1.0.0' );
		wp_enqueue_style( 'admin-style' );
	}
}
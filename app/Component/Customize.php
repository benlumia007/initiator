<?php
/**
 * Initiator ( Customize.php )
 *
 * @package     Initiator
 * @copyright   Copyright (C) 2019. Benjamin Lu
 * @license     GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

/**
 * Table of Content
 *
 * 1.0 - Create a New Framework
 */
namespace Initiator\Component;

use Benlumia007\Backdrop\Contracts\Customize\Customize as CustomizeAbstract;

/**
 * 1.0 - Create a New Framework
 *
 * This will initialize te Backdrop Core Framework and will add all the necessary components and features
 * to the theme, such as Menu, Sidebar, and Global Layout.
 */
class Customize extends CustomizeAbstract {
	/**
	 * Register register_panels
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  object $manager customizer object.
	 */
	public function register_panels( $manager ) {}

	/**
	 * Register register_sections
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  object $manager customizer object.
	 */
	public function register_sections( $manager ) {
		$manager->get_section( 'colors' )->panel = 'theme_options';
	}

	/**
	 * Register register_settings
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  object $manager customizer object.
	 */
	public function register_settings( $manager ) {}

	/**
	 * Register register_controls
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  object $manager customizer object.
	 */
	public function register_controls( $manager ) {}
}

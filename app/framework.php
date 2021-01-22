<?php
/**
 * Initiator ( app/framework.php )
 *
 * @package   Initiator
 * @copyright Copyright (C) 2019-2021. Benjamin Lu
 * @license   GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author    Benjamin Lu ( https://getbenonit.com )
 */

/**
 * Create a new framework instance
 *
 * This will create an instance of the framework allowing you to initialize the theme.
 */
$initiator = Benlumia007\Backdrop\Framework::get_instance();

$initiator->menus = new Benlumia007\Backdrop\Menu\Menu(
	$args = [
		'primary'   => esc_html__( 'Primary Navigation', 'initiator' ),
		'secondary' => esc_html__( 'Secondary Navigation', 'initiator' ),
		'social'    => esc_html__( 'Social Navigation', 'initiator' ),
	]
);

$initiator->sidebars = new Benlumia007\Backdrop\Sidebar\Sidebar(
	$args = [
		'primary' => [
			'name' => esc_html__( 'Primary Sidebar', 'initiator' ),
			'desc' => esc_html__( 'Test', 'initiator' ),
		],
	]
);
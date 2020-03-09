<?php
/**
 * Initiator ( framework.php )
 *
 * This file is used to create a new framework instance and adds specific features to the theme.
 *
 * @package     Initiator
 * @copyright   Copyright (C) 2019. Benjamin Lu
 * @license     GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

/**
 * Create a new framework instance
 *
 * This will create an instance of the framework allowing you to initialize the theme.
 */
$initiator = Backdrop\Framework::get_instance();

$initiator->customize = new Initiator\Component\Customize();
$initiator->admin     = new Initiator\Component\Admin();


$initiator->menus = new Backdrop\Menu\Menu(
	$args = array(
		'primary' => esc_html__( 'Primary Navigation', 'initiator' ),
		'secondary' => esc_html__( 'Secondary Navigation', 'initiator' ),
		'social' => esc_html( 'Social Navigation', 'initiator' ),
	)
 );

$initiator->sidebars = new Backdrop\Sidebar\Sidebar(
	$args = array(
		'primary' => array(
			'name' => esc_html__( 'Primary Sidebar', 'initiator' ),
			'desc' => esc_html__( 'Only for Posts', 'initiator' ),
		),
		'secondary' => array(
			'name' => esc_html__( 'Secondary Sidebar', 'initiator' ),
			'desc' => esc_html__( 'Pages Only', 'initiator' ),
		)
	)
);

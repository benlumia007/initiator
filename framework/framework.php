<?php
/**
 * Initiator ( framework.php )
 *
 * @package     Initiator
 * @copyright   Copyright (C) 2019. Benjamin Lu
 * @license     GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

/**
 * Table of Content
 *
 * 1.0 - Create a new Framework
 */

/**
 * 1.0 - Create a new Framework
 */
$initiator  = new Benlumia007\Backdrop\Framework();
$sidebar    = new Benlumia007\Backdrop\Framework\Sidebar();
$menus      = new Benlumia007\Backdrop\Framework\Menu();
$customizer = new Benlumia007\Backdrop\Framework\Customizer();

function test() {
	add_theme_support('custom-background');
	add_theme_support( 'custom-header' );
}	
add_action( 'after_setup_theme', 'test' );
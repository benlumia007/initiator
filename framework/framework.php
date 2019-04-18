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
$initiator = new Benlumia007\Backdrop\Framework();

$sidebar = new Benlumia007\Backdrop\Register\Sidebar();
$sidebar->create_sidebar( 'Primary Sidebar', 'primary' );


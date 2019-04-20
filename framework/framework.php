<?php
/**
 * Initiator ( framework.php )
 *
 * @package     Initiator
 * @copyright   Copyright (C) 2019. Benjamin Lu
 * @license     GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

use Benlumia007\Backdrop\Register;
/**
 * Table of Content
 *
 * 1.0 - Create a new Framework
 */

/**
 * 1.0 - Create a new Framework
 */
$register_sidebar = new Register\Sidebar();
$register_menu    = new Register\Menu();
$register_customizer = new Register\ThemeLayout();

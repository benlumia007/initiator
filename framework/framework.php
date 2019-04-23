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
 * This will create an instance of the framework allowing you to initialize within the theme.
 */
$framework = Benlumia007\Backdrop\Framework::get_instance();

/**
 * Loads boot();
 *
 * Creates and calls and boots additional features, allowing the theme to fully function.
 */
$framework->boot();

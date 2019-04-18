<?php
/**
 * Initiator ( functions.php )
 *
 * This (functions.php) template file should only do three jobs, one is to check the compatibility if the site meets
 * the miminum requirements before the theme proceeds to activate. The second job is to autoload the backdrop core
 * famework. The last job is to require the theme's framework so that it can add additional features if the backdrop
 * core doesn't come with features the theme needs.
 *
 * @package     Initiator
 * @copyright   Copyright (C) 2018-2019. Benjamin Lu
 * @license     GNU General Public License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author      Benjamin Lu ( https://benjlu.com )
 */

/**
 * Table of Content
 *
 * 1.0 - Compatibility Check
 * 2.0 - Backdrop Core
 * 3.0 - Framework
 */

/**
 * 1.0 - Compatibility Check
 */
function initiator_compatibility_check() {
	if ( version_compare( $GLOBALS['wp_version'], '5.0', '<' ) ) {
		return sprintf(
			// translators: 1 =  a version string, 2 = current wp version string.
			__( 'Initiator requires at least WordPress version %1$s. You are currently running %2$s. Please upgrade and try again.', 'initiator' ),
			'4.9.6',
			$GLOBALS['wp_version']
		);
	} elseif ( version_compare( PHP_VERSION, '5.6', '<' ) ) {
		return sprintf(
			// translators: 1 =  a version string, 2 = current wp version string.
			__( 'Initiator requires at least PHP version %1$s. You are currently running %2$s. Please upgrade and try again.', 'initiator' ),
			'5.6',
			PHP_VERSION
		);
	}
	return '';
}

/**
 * 2.0 - Backdrop Core
 */

/**
 * 3.0 - Framework
 */

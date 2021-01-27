<?php
/**
 * Backdrop Core ( src/Tools/ServiceProvider.php )
 *
 * @package   Backdrop Core
 * @copyright Copyright (C) 2019-2021. Benjamin Lu
 * @license   GNU General PUblic License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author    Benjamin Lu ( https://getbenonit.com )
 */

/**
 * Define namespace
 */
namespace Initiator\Navigation;
use Benlumia007\Backdrop\Tools\ServiceProvider;
use Initiator\Navigation\Menu;

/**
 * Attr provider class.
 *
 * @since  5.0.0
 * @access public
 */
class MenuServiceProvider extends ServiceProvider {

	/**
	 * Binds the implementation of the attributes contract to the container.
	 *
	 * @since  2.0.0
	 * @access public
	 * @return void
	 */
	public function register() {

		$this->app->bind( Menu::class );

        $this->app->alias( Menu::class, 'menu' );
    }
    
    public function boot() {
        $this->app->resolve( 'menu' )->boot();
    }
}
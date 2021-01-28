<?php
/**
 * Backdrop Core ( app/Sidebar/Component.php )
 *
 * @package   Backdrop Core
 * @copyright Copyright (C) 2019-2021. Benjamin Lu
 * @license   GNU General PUblic License v2 or later ( https://www.gnu.org/licenses/gpl-2.0.html )
 * @author    Benjamin Lu ( https://getbenonit.com )
 */


namespace Initiator\Sidebar;
use Benlumia007\Backdrop\Component\Sidebar as SidebarContract;

class Component extends SidebarContract {
    public function __construct( $sidebar_id = [] ) {
        $this->sidebar_id = $this->defaults();
    }

    public function defaults() {
        return array(
            'primary' => [
                'name' => esc_html__( 'Primary Sidebar', 'initiator' ),
                'desc' => esc_html__( 'test', 'initiator' ),
            ],
            'secondary' => [
                'name' => esc_html__( 'Secondary Sidebar', 'initiator' ),
                'desc' => esc_html__( 'test', 'initiator' ),
            ]
        );
    }
}   
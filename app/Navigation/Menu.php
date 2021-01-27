<?php

namespace Initiator\Navigation;
use Benlumia007\Backdrop\Navigation\Menu as MenuContract;

class Menu extends MenuContract {
    public function __construct( $menu_id = [] ) {
        $this->menu_id = $this->defaults();
    }

    public function defaults() {
        return array(
            'primary'   => esc_html__( 'Primary Sidebar', 'initiator' ),
            'secondary' => esc_html__( 'Secondary Sidebar', 'initiator' ),
            'social'    => esc_html__( 'Social Navigation', 'initiator' )
        );
    }
}   
<?php

namespace Initiator\Menu;
use Benlumia007\Backdrop\Component\Menu as MenuContract;

class Component extends MenuContract {
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
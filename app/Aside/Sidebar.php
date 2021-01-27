<?php

namespace Initiator\Aside;
use Benlumia007\Backdrop\Aside\Sidebar as SidebarContract;

class Sidebar extends SidebarContract {
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
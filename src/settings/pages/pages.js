define([
        'settings/pages/main/main',
        'settings/pages/settings/settings',
        'settings/pages/layout/layout',
        'settings/pages/design/design',
        'settings/pages/animations/animations',
        'settings/pages/support/support'
    ],
    function (Main, Settings, Layout, Design, Animations, Support) {
        return [
            {
                label: 'Main',
                component: Main
            },
            {
                label: 'Settings',
                component: Settings
            },
            {
                label: 'Layout',
                component: Layout
            },
            {
                label: 'Design',
                component: Design
            },
            {
                label: 'Animations',
                component: Animations
            },
            {
                label: 'Support',
                component: Support
            }
        ]
    }
);

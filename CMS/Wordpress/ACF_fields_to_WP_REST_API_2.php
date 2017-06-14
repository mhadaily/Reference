<?php
// This is an example that how you are able to customize WP REST API and and ACF to get_callback
//In this example STEP is your custom post type and can be any other post type in wordpress such as post , page and ...

add_action('rest_api_init', 'slug_register_acf_random');
function slug_register_acf_random()
{
    register_rest_field('step',
        'acf',
        array(
            'get_callback' => 'slug_get_acf',
            'update_callback' => '',
            'schema' => null,
        )
    );
}

function slug_get_acf($object, $field_name, $request)
{
    if (function_exists('get_fields')) {
        return get_fields($data['id']);
    }
    return [];
}

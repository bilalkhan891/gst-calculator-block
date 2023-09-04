<?php
/*
Plugin Name: GST Calculator Block
Description: A custom block for calculating GST.
Version: 1.0
Author: Bilal Afridi
*/

function gst_calculator_block_enqueue_assets()
{
    wp_enqueue_script(
        'gst-calculator-block',
        plugin_dir_url(__FILE__) . 'dist/block.js',
        array('wp-blocks', 'wp-components', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'dist/block.js')
    );

    wp_enqueue_style(
        'gst-calculator-block-style',
        plugin_dir_url(__FILE__) . 'dist/style.css',
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'dist/style.css')
    );
}

add_action('enqueue_block_editor_assets', 'gst_calculator_block_enqueue_assets');
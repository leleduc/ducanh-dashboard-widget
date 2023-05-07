<?php

/**
 * Plugin Name:       Duc Anh Dashboard Widget
 * Description:       Plugin for Rank Match Challenge.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Duc Anh
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ducanh-dashboard-widget
 */

/**
 * Add plugin to admin dashboard widget area.
 *
 * @return void
 */
add_action('wp_dashboard_setup', 'ducanh_dashboard_add_widgets');
function ducanh_dashboard_add_widgets()
{
    wp_add_dashboard_widget('ducanh_dashboard_widget_rechart', __('Graph Widget', 'ducanh-dashboard-widget'), 'ducanh_dashboard_widget_rechart_handler');
}

/**
 * The content display.
 *
 * @return void
 */
function ducanh_dashboard_widget_rechart_handler()
{
    require_once plugin_dir_path(__FILE__) . 'templates/app.php';
}



/**
 * Enqueue scripts and styles.
 *
 * @return void
 */
function ducanh_admin_enqueue_scripts()
{
    wp_enqueue_style('ducanh-style', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_enqueue_script('ducanh-script', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-element'), '1.0.0', true);
}

add_action('admin_enqueue_scripts', 'ducanh_admin_enqueue_scripts');

/**
 * Create table in mySQL database
 *
 * @return void
 */
function ducanh_create_payment_table()
{

    global $wpdb;

    $table_name = $wpdb->prefix . "widget_data";

    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
      id bigint(20) NOT NULL AUTO_INCREMENT,
      data_date date UNSIGNED NOT NULL,
      data_uv int NOT NULL,
      data_pv int NOT NULL,
      data_atm int NOT NULL,
      PRIMARY KEY id (id)
    ) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}

add_action('init', 'ducanh_create_payment_table');


/**
 * Create Rest API endpoint
 *
 * @return void
 */
add_action('rest_api_init', function () {
    $namespace = 'ducanh/v1';
    $route     = '/chart-data';

    register_rest_route($namespace, $route, array(
        'methods'   => WP_REST_Server::READABLE,
        'callback'  => function () {
            global $wpdb;
            $table = $wpdb->prefix . 'widget_data';
            $query = "SELECT data_date, data_uv, data_pv FROM $table ORDER BY data_date DESC";
            $results = $wpdb->get_results($query);
            return $results;
        },
        'permission_callback' => '__return_true',
        'args' => array()
    ));
});

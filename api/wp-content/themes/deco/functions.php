<?php

function dc_setup() {
  add_theme_support('post-thumbnails');
  set_post_thumbnail_size(1140, 490);
}

function dc_get_comments($object) {
  return (int)get_comments_number($object['id']);
}

function dc_register_author_meta_rest_field() {
  register_rest_field('post', 'comments', [
    'get_callback' => 'dc_get_comments',
  ]);
}

function dh_trim_excerpt($text){
  return rtrim(str_replace('[&hellip', '', $text), '[...]');
}

add_filter('get_the_excerpt', 'dh_trim_excerpt');

add_action('rest_api_init', 'dc_register_author_meta_rest_field');
add_action('after_setup_theme', 'dc_setup');

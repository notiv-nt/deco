<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_deco' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6,?+ntfkv)j~Y/g]a(;B(;&xwde=]5.Wou3.m$4Xtu=OGC zW|Oke4#Q^`q+|m$3' );
define( 'SECURE_AUTH_KEY',  'Z;|njXWL6W2tNs;my1%?.(#SJWE1U+1KS_V,RN|/GS7xp#$CKeI[#pST&=X%?<::' );
define( 'LOGGED_IN_KEY',    '?%0%0V-q4MWLB>8S3*u&CEcwd%]9a<?G]Ggbyv=FFkm|J^2<}+3CD<6l0$uVZatv' );
define( 'NONCE_KEY',        'uWcX{OPbi;7qr;Mop=+~6Dl>uHz-O1Y9TEtq|n4?Y|b?8pr).K8f!JiKb+swyXE+' );
define( 'AUTH_SALT',        '!375rGn&M2&X]1qH>,lhC1f7<Dk3e5VmMU3zIu7Fh]?z(r76{uCF(e{6+)=a9dp6' );
define( 'SECURE_AUTH_SALT', '.ZxRQ`JO/dF9VwRV6Nu08*,3JL}(@U;Bq/5Q@jm}z8r/YNGZmcg{/:nu.T6I%kWu' );
define( 'LOGGED_IN_SALT',   '?choBM`#cD+jL&_R7sgXN+a/ctQeF#2wc-4hO}(d@TXj;u|[RsGI!^8`(X!ZYiIA' );
define( 'NONCE_SALT',       'k;C?jkWg_{+:7LONuGO1-Dn[p_4:X0v{RF1=3eg+cEs6{xOniv5h{A[~m]nl]ZWQ' );

/**#@-*/

// Custom
define('WP_MEMORY_LIMIT', '256M');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

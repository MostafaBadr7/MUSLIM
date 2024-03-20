<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'finalProject' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Q`2mYd}T[<M;IY&DGFPBQwqlfc)6Gs$x%<=tGXzSx{@77!#h#czMU-z]AfWz~:HP' );
define( 'SECURE_AUTH_KEY',  'iLKuqb.FBOI,E:xuvF?Z9[?N6,Z:8g<?isf=Zvi`~cjHps}wa3q4,o<#5<(,L*:0' );
define( 'LOGGED_IN_KEY',    '&bx_?Uemr6S1{nb2pBQ;w`4kRXA<]Xr!pB&1aK[JJN|rk+k^KRGtI&+2*f[lqeGP' );
define( 'NONCE_KEY',        '<Nx-5YU)S8LO@&/,(lQ {<+A:lzAQ6(0wcZ4*0dTOeu1)RREo6p9BrXuy<Jl.<L[' );
define( 'AUTH_SALT',        'cfAVr P0%F_$6]-9,Z&Wq`$fENsA;Rf+SoUYd.5&hb#9+_LJ:y8x=t6`anB`j=pj' );
define( 'SECURE_AUTH_SALT', 'jbJG.EScFo85}KL[LqZI 9_bs%3m/=0&TLPn`*{(-U8}5j>tj`qC4z )igIgX<p ' );
define( 'LOGGED_IN_SALT',   'A<$QmC!# $FJoyxNytWu}QAWGvAb]gpO0r9H#@&u3-EX!^.M553Z1.^yxW-Ah9sk' );
define( 'NONCE_SALT',       '{DRwK2$sxAhPJd0@yo|<iZ,*lHn`~Hx&-U`Pm(}`L}mHx7],p8B(z:l&slt.m(A{' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'fp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

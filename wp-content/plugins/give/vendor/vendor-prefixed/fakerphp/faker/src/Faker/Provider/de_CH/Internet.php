<?php
/**
 * @license MIT
 *
 * Modified by impress-org on 03-November-2023 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace Give\Vendors\Faker\Provider\de_CH;

class Internet extends \Give\Vendors\Faker\Provider\Internet
{
    protected static $freeEmailDomain = [
        'gmail.com',
        'hotmail.com',
        'yahoo.com',
        'googlemail.com',
        'gmx.ch',
        'bluewin.ch',
        'swissonline.ch',
    ];
    protected static $tld = ['com', 'com', 'com', 'net', 'org', 'li', 'ch', 'ch'];
}

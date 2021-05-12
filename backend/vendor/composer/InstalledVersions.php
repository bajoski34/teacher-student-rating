<?php











namespace Composer;

use Composer\Autoload\ClassLoader;
use Composer\Semver\VersionParser;






class InstalledVersions
{
private static $installed = array (
  'root' => 
  array (
    'pretty_version' => 'dev-master',
    'version' => 'dev-master',
    'aliases' => 
    array (
    ),
    'reference' => '7980ade0725aae67cb02223bee7ec4655ee7ecd7',
    'name' => 'laravel/laravel',
  ),
  'versions' => 
  array (
    'asm89/stack-cors' => 
    array (
      'pretty_version' => '1.3.0',
      'version' => '1.3.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'b9c31def6a83f84b4d4a40d35996d375755f0e08',
    ),
    'cordoval/hamcrest-php' => 
    array (
      'replaced' => 
      array (
        0 => '*',
      ),
    ),
    'davedevelopment/hamcrest-php' => 
    array (
      'replaced' => 
      array (
        0 => '*',
      ),
    ),
    'dnoegel/php-xdg-base-dir' => 
    array (
      'pretty_version' => 'v0.1.1',
      'version' => '0.1.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '8f8a6e48c5ecb0f991c2fdcf5f154a47d85f9ffd',
    ),
    'doctrine/inflector' => 
    array (
      'pretty_version' => '1.3.1',
      'version' => '1.3.1.0',
      'aliases' => 
      array (
      ),
      'reference' => 'ec3a55242203ffa6a4b27c58176da97ff0a7aec1',
    ),
    'doctrine/instantiator' => 
    array (
      'pretty_version' => '1.3.0',
      'version' => '1.3.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'ae466f726242e637cebdd526a7d991b9433bacf1',
    ),
    'doctrine/lexer' => 
    array (
      'pretty_version' => '1.2.0',
      'version' => '1.2.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '5242d66dbeb21a30dd8a3e66bf7a73b66e05e1f6',
    ),
    'dragonmantank/cron-expression' => 
    array (
      'pretty_version' => 'v2.3.0',
      'version' => '2.3.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '72b6fbf76adb3cf5bc0db68559b33d41219aba27',
    ),
    'egulias/email-validator' => 
    array (
      'pretty_version' => '2.1.17',
      'version' => '2.1.17.0',
      'aliases' => 
      array (
      ),
      'reference' => 'ade6887fd9bd74177769645ab5c474824f8a418a',
    ),
    'facade/flare-client-php' => 
    array (
      'pretty_version' => '1.3.2',
      'version' => '1.3.2.0',
      'aliases' => 
      array (
      ),
      'reference' => 'db1e03426e7f9472c9ecd1092aff00f56aa6c004',
    ),
    'facade/ignition' => 
    array (
      'pretty_version' => '2.0.2',
      'version' => '2.0.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '67f1677954ad33ca6b77f2c41cf43a58624f27fc',
    ),
    'facade/ignition-contracts' => 
    array (
      'pretty_version' => '1.0.0',
      'version' => '1.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'f445db0fb86f48e205787b2592840dd9c80ded28',
    ),
    'fideloper/proxy' => 
    array (
      'pretty_version' => '4.3.0',
      'version' => '4.3.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'ec38ad69ee378a1eec04fb0e417a97cfaf7ed11a',
    ),
    'filp/whoops' => 
    array (
      'pretty_version' => '2.7.1',
      'version' => '2.7.1.0',
      'aliases' => 
      array (
      ),
      'reference' => 'fff6f1e4f36be0e0d0b84d66b413d9dcb0c49130',
    ),
    'fruitcake/laravel-cors' => 
    array (
      'pretty_version' => 'v1.0.5',
      'version' => '1.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => '0e0500133dbb6325266133dd72f040617c9cdbd0',
    ),
    'fzaninotto/faker' => 
    array (
      'pretty_version' => 'v1.9.1',
      'version' => '1.9.1.0',
      'aliases' => 
      array (
      ),
      'reference' => 'fc10d778e4b84d5bd315dad194661e091d307c6f',
    ),
    'guzzlehttp/guzzle' => 
    array (
      'pretty_version' => '7.0.1',
      'version' => '7.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '2d9d3c186a6637a43193e66b097c50e4451eaab2',
    ),
    'guzzlehttp/promises' => 
    array (
      'pretty_version' => 'v1.3.1',
      'version' => '1.3.1.0',
      'aliases' => 
      array (
      ),
      'reference' => 'a59da6cf61d80060647ff4d3eb2c03a2bc694646',
    ),
    'guzzlehttp/psr7' => 
    array (
      'pretty_version' => '1.6.1',
      'version' => '1.6.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '239400de7a173fe9901b9ac7c06497751f00727a',
    ),
    'hamcrest/hamcrest-php' => 
    array (
      'pretty_version' => 'v2.0.0',
      'version' => '2.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '776503d3a8e85d4f9a1148614f95b7a608b046ad',
    ),
    'illuminate/auth' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/broadcasting' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/bus' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/cache' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/config' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/console' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/container' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/contracts' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/cookie' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/database' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/encryption' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/events' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/filesystem' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/hashing' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/http' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/log' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/mail' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/notifications' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/pagination' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/pipeline' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/queue' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/redis' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/routing' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/session' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/support' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/testing' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/translation' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/validation' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'illuminate/view' => 
    array (
      'replaced' => 
      array (
        0 => 'v7.2.2',
      ),
    ),
    'jakub-onderka/php-console-color' => 
    array (
      'pretty_version' => 'v0.2',
      'version' => '0.2.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'd5deaecff52a0d61ccb613bb3804088da0307191',
    ),
    'jakub-onderka/php-console-highlighter' => 
    array (
      'pretty_version' => 'v0.4',
      'version' => '0.4.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '9f7a229a69d52506914b4bc61bfdb199d90c5547',
    ),
    'kodova/hamcrest-php' => 
    array (
      'replaced' => 
      array (
        0 => '*',
      ),
    ),
    'laravel/framework' => 
    array (
      'pretty_version' => 'v7.2.2',
      'version' => '7.2.2.0',
      'aliases' => 
      array (
      ),
      'reference' => 'de01e2926a7560c43fb763d86de134a52b46928b',
    ),
    'laravel/laravel' => 
    array (
      'pretty_version' => 'dev-master',
      'version' => 'dev-master',
      'aliases' => 
      array (
      ),
      'reference' => '7980ade0725aae67cb02223bee7ec4655ee7ecd7',
    ),
    'laravel/tinker' => 
    array (
      'pretty_version' => 'v2.3.0',
      'version' => '2.3.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '5271893ec90ad9f8d3e34792ac6b72cad3b84cc2',
    ),
    'lcobucci/jwt' => 
    array (
      'pretty_version' => '3.3.1',
      'version' => '3.3.1.0',
      'aliases' => 
      array (
      ),
      'reference' => 'a11ec5f4b4d75d1fcd04e133dede4c317aac9e18',
    ),
    'league/commonmark' => 
    array (
      'pretty_version' => '1.3.1',
      'version' => '1.3.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '8015f806173c6ee54de25a87c2d69736696e88db',
    ),
    'league/flysystem' => 
    array (
      'pretty_version' => '1.0.66',
      'version' => '1.0.66.0',
      'aliases' => 
      array (
      ),
      'reference' => '021569195e15f8209b1c4bebb78bd66aa4f08c21',
    ),
    'mockery/mockery' => 
    array (
      'pretty_version' => '1.3.1',
      'version' => '1.3.1.0',
      'aliases' => 
      array (
      ),
      'reference' => 'f69bbde7d7a75d6b2862d9ca8fab1cd28014b4be',
    ),
    'monolog/monolog' => 
    array (
      'pretty_version' => '2.0.2',
      'version' => '2.0.2.0',
      'aliases' => 
      array (
      ),
      'reference' => 'c861fcba2ca29404dc9e617eedd9eff4616986b8',
    ),
    'myclabs/deep-copy' => 
    array (
      'pretty_version' => '1.9.5',
      'version' => '1.9.5.0',
      'aliases' => 
      array (
      ),
      'reference' => 'b2c28789e80a97badd14145fda39b545d83ca3ef',
      'replaced' => 
      array (
        0 => '1.9.5',
      ),
    ),
    'namshi/jose' => 
    array (
      'pretty_version' => '7.2.3',
      'version' => '7.2.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '89a24d7eb3040e285dd5925fcad992378b82bcff',
    ),
    'nesbot/carbon' => 
    array (
      'pretty_version' => '2.31.0',
      'version' => '2.31.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'bbc0ab53f41a4c6f223c18efcdbd9bc725eb5d2d',
    ),
    'nikic/php-parser' => 
    array (
      'pretty_version' => 'v4.3.0',
      'version' => '4.3.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '9a9981c347c5c49d6dfe5cf826bb882b824080dc',
    ),
    'nunomaduro/collision' => 
    array (
      'pretty_version' => 'v4.1.3',
      'version' => '4.1.3.0',
      'aliases' => 
      array (
      ),
      'reference' => 'a430bce33d1ad07f756ea6cae9afce9ef8670b42',
    ),
    'opis/closure' => 
    array (
      'pretty_version' => '3.5.1',
      'version' => '3.5.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '93ebc5712cdad8d5f489b500c59d122df2e53969',
    ),
    'paragonie/random_compat' => 
    array (
      'pretty_version' => 'v9.99.99',
      'version' => '9.99.99.0',
      'aliases' => 
      array (
      ),
      'reference' => '84b4dfb120c6f9b4ff7b3685f9b8f1aa365a0c95',
    ),
    'phar-io/manifest' => 
    array (
      'pretty_version' => '1.0.3',
      'version' => '1.0.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '7761fcacf03b4d4f16e7ccb606d4879ca431fcf4',
    ),
    'phar-io/version' => 
    array (
      'pretty_version' => '2.0.1',
      'version' => '2.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '45a2ec53a73c70ce41d55cedef9063630abaf1b6',
    ),
    'phpdocumentor/reflection-common' => 
    array (
      'pretty_version' => '2.0.0',
      'version' => '2.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '63a995caa1ca9e5590304cd845c15ad6d482a62a',
    ),
    'phpdocumentor/reflection-docblock' => 
    array (
      'pretty_version' => '5.1.0',
      'version' => '5.1.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'cd72d394ca794d3466a3b2fc09d5a6c1dc86b47e',
    ),
    'phpdocumentor/type-resolver' => 
    array (
      'pretty_version' => '1.1.0',
      'version' => '1.1.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '7462d5f123dfc080dfdf26897032a6513644fc95',
    ),
    'phpoption/phpoption' => 
    array (
      'pretty_version' => '1.7.3',
      'version' => '1.7.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '4acfd6a4b33a509d8c88f50e5222f734b6aeebae',
    ),
    'phpspec/prophecy' => 
    array (
      'pretty_version' => 'v1.10.3',
      'version' => '1.10.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '451c3cd1418cf640de218914901e51b064abb093',
    ),
    'phpunit/php-code-coverage' => 
    array (
      'pretty_version' => '7.0.10',
      'version' => '7.0.10.0',
      'aliases' => 
      array (
      ),
      'reference' => 'f1884187926fbb755a9aaf0b3836ad3165b478bf',
    ),
    'phpunit/php-file-iterator' => 
    array (
      'pretty_version' => '2.0.2',
      'version' => '2.0.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '050bedf145a257b1ff02746c31894800e5122946',
    ),
    'phpunit/php-text-template' => 
    array (
      'pretty_version' => '1.2.1',
      'version' => '1.2.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '31f8b717e51d9a2afca6c9f046f5d69fc27c8686',
    ),
    'phpunit/php-timer' => 
    array (
      'pretty_version' => '2.1.2',
      'version' => '2.1.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '1038454804406b0b5f5f520358e78c1c2f71501e',
    ),
    'phpunit/php-token-stream' => 
    array (
      'pretty_version' => '3.1.1',
      'version' => '3.1.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '995192df77f63a59e47f025390d2d1fdf8f425ff',
    ),
    'phpunit/phpunit' => 
    array (
      'pretty_version' => '8.5.2',
      'version' => '8.5.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '018b6ac3c8ab20916db85fa91bf6465acb64d1e0',
    ),
    'psr/container' => 
    array (
      'pretty_version' => '1.0.0',
      'version' => '1.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'b7ce3b176482dbbc1245ebf52b181af44c2cf55f',
    ),
    'psr/event-dispatcher' => 
    array (
      'pretty_version' => '1.0.0',
      'version' => '1.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'dbefd12671e8a14ec7f180cab83036ed26714bb0',
    ),
    'psr/event-dispatcher-implementation' => 
    array (
      'provided' => 
      array (
        0 => '1.0',
      ),
    ),
    'psr/http-client' => 
    array (
      'pretty_version' => '1.0.1',
      'version' => '1.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '2dfb5f6c5eff0e91e20e913f8c5452ed95b86621',
    ),
    'psr/http-client-implementation' => 
    array (
      'provided' => 
      array (
        0 => '1.0',
      ),
    ),
    'psr/http-message' => 
    array (
      'pretty_version' => '1.0.1',
      'version' => '1.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => 'f6561bf28d520154e4b0ec72be95418abe6d9363',
    ),
    'psr/http-message-implementation' => 
    array (
      'provided' => 
      array (
        0 => '1.0',
      ),
    ),
    'psr/log' => 
    array (
      'pretty_version' => '1.1.2',
      'version' => '1.1.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '446d54b4cb6bf489fc9d75f55843658e6f25d801',
    ),
    'psr/log-implementation' => 
    array (
      'provided' => 
      array (
        0 => '1.0.0',
        1 => '1.0',
      ),
    ),
    'psr/simple-cache' => 
    array (
      'pretty_version' => '1.0.1',
      'version' => '1.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '408d5eafb83c57f6365a3ca330ff23aa4a5fa39b',
    ),
    'psy/psysh' => 
    array (
      'pretty_version' => 'v0.10.2',
      'version' => '0.10.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '573c2362c3cdebe846b4adae4b630eecb350afd8',
    ),
    'ralouphie/getallheaders' => 
    array (
      'pretty_version' => '3.0.3',
      'version' => '3.0.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '120b605dfeb996808c31b6477290a714d356e822',
    ),
    'ramsey/uuid' => 
    array (
      'pretty_version' => '3.9.3',
      'version' => '3.9.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '7e1633a6964b48589b142d60542f9ed31bd37a92',
    ),
    'rhumsaa/uuid' => 
    array (
      'replaced' => 
      array (
        0 => '3.9.3',
      ),
    ),
    'scrivo/highlight.php' => 
    array (
      'pretty_version' => 'v9.18.1.1',
      'version' => '9.18.1.1',
      'aliases' => 
      array (
      ),
      'reference' => '52fc21c99fd888e33aed4879e55a3646f8d40558',
    ),
    'sebastian/code-unit-reverse-lookup' => 
    array (
      'pretty_version' => '1.0.1',
      'version' => '1.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '4419fcdb5eabb9caa61a27c7a1db532a6b55dd18',
    ),
    'sebastian/comparator' => 
    array (
      'pretty_version' => '3.0.2',
      'version' => '3.0.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '5de4fc177adf9bce8df98d8d141a7559d7ccf6da',
    ),
    'sebastian/diff' => 
    array (
      'pretty_version' => '3.0.2',
      'version' => '3.0.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '720fcc7e9b5cf384ea68d9d930d480907a0c1a29',
    ),
    'sebastian/environment' => 
    array (
      'pretty_version' => '4.2.3',
      'version' => '4.2.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '464c90d7bdf5ad4e8a6aea15c091fec0603d4368',
    ),
    'sebastian/exporter' => 
    array (
      'pretty_version' => '3.1.2',
      'version' => '3.1.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '68609e1261d215ea5b21b7987539cbfbe156ec3e',
    ),
    'sebastian/global-state' => 
    array (
      'pretty_version' => '3.0.0',
      'version' => '3.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'edf8a461cf1d4005f19fb0b6b8b95a9f7fa0adc4',
    ),
    'sebastian/object-enumerator' => 
    array (
      'pretty_version' => '3.0.3',
      'version' => '3.0.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '7cfd9e65d11ffb5af41198476395774d4c8a84c5',
    ),
    'sebastian/object-reflector' => 
    array (
      'pretty_version' => '1.1.1',
      'version' => '1.1.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '773f97c67f28de00d397be301821b06708fca0be',
    ),
    'sebastian/recursion-context' => 
    array (
      'pretty_version' => '3.0.0',
      'version' => '3.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '5b0cd723502bac3b006cbf3dbf7a1e3fcefe4fa8',
    ),
    'sebastian/resource-operations' => 
    array (
      'pretty_version' => '2.0.1',
      'version' => '2.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '4d7a795d35b889bf80a0cc04e08d77cedfa917a9',
    ),
    'sebastian/type' => 
    array (
      'pretty_version' => '1.1.3',
      'version' => '1.1.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '3aaaa15fa71d27650d62a948be022fe3b48541a3',
    ),
    'sebastian/version' => 
    array (
      'pretty_version' => '2.0.1',
      'version' => '2.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '99732be0ddb3361e16ad77b68ba41efc8e979019',
    ),
    'swiftmailer/swiftmailer' => 
    array (
      'pretty_version' => 'v6.2.3',
      'version' => '6.2.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '149cfdf118b169f7840bbe3ef0d4bc795d1780c9',
    ),
    'symfony/console' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => 'd29e2d36941de13600c399e393a60b8cfe59ac49',
    ),
    'symfony/css-selector' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => 'a0b51ba9938ccc206d9284de7eb527c2d4550b44',
    ),
    'symfony/error-handler' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => '24a938d9913f42d006ee1ca0164ea1f29c1067ec',
    ),
    'symfony/event-dispatcher' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => 'b45ad88b253c5a9702ce218e201d89c85d148cea',
    ),
    'symfony/event-dispatcher-contracts' => 
    array (
      'pretty_version' => 'v2.0.1',
      'version' => '2.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => 'af23c2584d4577d54661c434446fb8fbed6025dd',
    ),
    'symfony/event-dispatcher-implementation' => 
    array (
      'provided' => 
      array (
        0 => '2.0',
      ),
    ),
    'symfony/finder' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => '6251f201187ca9d66f6b099d3de65d279e971138',
    ),
    'symfony/http-foundation' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => '6f9c2ba72f4295d7ce6cf9f79dbb18036291d335',
    ),
    'symfony/http-kernel' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => '021d7d54e080405678f2d8c54cb31d0bb03b4520',
    ),
    'symfony/mime' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => '9b3e5b5e58c56bbd76628c952d2b78556d305f3c',
    ),
    'symfony/polyfill-ctype' => 
    array (
      'pretty_version' => 'v1.14.0',
      'version' => '1.14.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'fbdeaec0df06cf3d51c93de80c7eb76e271f5a38',
    ),
    'symfony/polyfill-iconv' => 
    array (
      'pretty_version' => 'v1.14.0',
      'version' => '1.14.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '926832ce51059bb58211b7b2080a88e0c3b5328e',
    ),
    'symfony/polyfill-intl-idn' => 
    array (
      'pretty_version' => 'v1.14.0',
      'version' => '1.14.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '6842f1a39cf7d580655688069a03dd7cd83d244a',
    ),
    'symfony/polyfill-mbstring' => 
    array (
      'pretty_version' => 'v1.14.0',
      'version' => '1.14.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '34094cfa9abe1f0f14f48f490772db7a775559f2',
    ),
    'symfony/polyfill-php56' => 
    array (
      'pretty_version' => 'v1.14.0',
      'version' => '1.14.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '16ec91cb06998b609501b55b7177b7d7c02badb3',
    ),
    'symfony/polyfill-php72' => 
    array (
      'pretty_version' => 'v1.14.0',
      'version' => '1.14.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '46ecacf4751dd0dc81e4f6bf01dbf9da1dc1dadf',
    ),
    'symfony/polyfill-php73' => 
    array (
      'pretty_version' => 'v1.14.0',
      'version' => '1.14.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '5e66a0fa1070bf46bec4bea7962d285108edd675',
    ),
    'symfony/polyfill-util' => 
    array (
      'pretty_version' => 'v1.14.0',
      'version' => '1.14.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'ba3cfcea6d0192cae46c62041f61cbb704b526d3',
    ),
    'symfony/process' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => 'fd4a86dd7e36437f2fc080d8c42c7415d828a0a8',
    ),
    'symfony/routing' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => 'd6ca39fd05c1902bf34d724ba06fb8044a0b46de',
    ),
    'symfony/service-contracts' => 
    array (
      'pretty_version' => 'v2.0.1',
      'version' => '2.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '144c5e51266b281231e947b51223ba14acf1a749',
    ),
    'symfony/translation' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => 'e9b93f42a1fd6aec6a0872d59ee5c8219a7d584b',
    ),
    'symfony/translation-contracts' => 
    array (
      'pretty_version' => 'v2.0.1',
      'version' => '2.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '8cc682ac458d75557203b2f2f14b0b92e1c744ed',
    ),
    'symfony/translation-implementation' => 
    array (
      'provided' => 
      array (
        0 => '2.0',
      ),
    ),
    'symfony/var-dumper' => 
    array (
      'pretty_version' => 'v5.0.5',
      'version' => '5.0.5.0',
      'aliases' => 
      array (
      ),
      'reference' => '3a37aeb1132d1035536d3d6aa9cb06c2ff9355e9',
    ),
    'theseer/tokenizer' => 
    array (
      'pretty_version' => '1.1.3',
      'version' => '1.1.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '11336f6f84e16a720dae9d8e6ed5019efa85a0f9',
    ),
    'tijsverkoyen/css-to-inline-styles' => 
    array (
      'pretty_version' => '2.2.2',
      'version' => '2.2.2.0',
      'aliases' => 
      array (
      ),
      'reference' => 'dda2ee426acd6d801d5b7fd1001cde9b5f790e15',
    ),
    'tymon/jwt-auth' => 
    array (
      'pretty_version' => '1.0.0',
      'version' => '1.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'd4cf9fd2b98790712d3e6cd1094e5ff018431f19',
    ),
    'vlucas/phpdotenv' => 
    array (
      'pretty_version' => 'v4.1.2',
      'version' => '4.1.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '939dfda2d7267ac8fc53ac3d642b5de357554c39',
    ),
    'voku/portable-ascii' => 
    array (
      'pretty_version' => '1.4.10',
      'version' => '1.4.10.0',
      'aliases' => 
      array (
      ),
      'reference' => '240e93829a5f985fab0984a6e55ae5e26b78a334',
    ),
    'webmozart/assert' => 
    array (
      'pretty_version' => '1.7.0',
      'version' => '1.7.0.0',
      'aliases' => 
      array (
      ),
      'reference' => 'aed98a490f9a8f78468232db345ab9cf606cf598',
    ),
  ),
);
private static $canGetVendors;
private static $installedByVendor = array();







public static function getInstalledPackages()
{
$packages = array();
foreach (self::getInstalled() as $installed) {
$packages[] = array_keys($installed['versions']);
}


if (1 === \count($packages)) {
return $packages[0];
}

return array_keys(array_flip(\call_user_func_array('array_merge', $packages)));
}









public static function isInstalled($packageName)
{
foreach (self::getInstalled() as $installed) {
if (isset($installed['versions'][$packageName])) {
return true;
}
}

return false;
}














public static function satisfies(VersionParser $parser, $packageName, $constraint)
{
$constraint = $parser->parseConstraints($constraint);
$provided = $parser->parseConstraints(self::getVersionRanges($packageName));

return $provided->matches($constraint);
}










public static function getVersionRanges($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

$ranges = array();
if (isset($installed['versions'][$packageName]['pretty_version'])) {
$ranges[] = $installed['versions'][$packageName]['pretty_version'];
}
if (array_key_exists('aliases', $installed['versions'][$packageName])) {
$ranges = array_merge($ranges, $installed['versions'][$packageName]['aliases']);
}
if (array_key_exists('replaced', $installed['versions'][$packageName])) {
$ranges = array_merge($ranges, $installed['versions'][$packageName]['replaced']);
}
if (array_key_exists('provided', $installed['versions'][$packageName])) {
$ranges = array_merge($ranges, $installed['versions'][$packageName]['provided']);
}

return implode(' || ', $ranges);
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getVersion($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

if (!isset($installed['versions'][$packageName]['version'])) {
return null;
}

return $installed['versions'][$packageName]['version'];
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getPrettyVersion($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

if (!isset($installed['versions'][$packageName]['pretty_version'])) {
return null;
}

return $installed['versions'][$packageName]['pretty_version'];
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getReference($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

if (!isset($installed['versions'][$packageName]['reference'])) {
return null;
}

return $installed['versions'][$packageName]['reference'];
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getRootPackage()
{
$installed = self::getInstalled();

return $installed[0]['root'];
}







public static function getRawData()
{
return self::$installed;
}



















public static function reload($data)
{
self::$installed = $data;
self::$installedByVendor = array();
}




private static function getInstalled()
{
if (null === self::$canGetVendors) {
self::$canGetVendors = method_exists('Composer\Autoload\ClassLoader', 'getRegisteredLoaders');
}

$installed = array();

if (self::$canGetVendors) {
foreach (ClassLoader::getRegisteredLoaders() as $vendorDir => $loader) {
if (isset(self::$installedByVendor[$vendorDir])) {
$installed[] = self::$installedByVendor[$vendorDir];
} elseif (is_file($vendorDir.'/composer/installed.php')) {
$installed[] = self::$installedByVendor[$vendorDir] = require $vendorDir.'/composer/installed.php';
}
}
}

$installed[] = self::$installed;

return $installed;
}
}

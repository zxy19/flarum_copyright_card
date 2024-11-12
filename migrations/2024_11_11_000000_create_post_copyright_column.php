<?php

use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return [
    'up' => function ($schema) {
        $schema->table("discussions", function (Blueprint $table) {
            $table->mediumText("copyright")->nullable();
        });
    },
    'down' => function ($schema) {
        $schema->table("discussions", function (Blueprint $table) {
            $table->dropColumn('copyright');
        });
    }
];
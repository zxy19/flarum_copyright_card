<?php

use Flarum\Group\Group;
use Flarum\Group\Permission;
use Flarum\User\User;
use Illuminate\Database\Schema\Blueprint;

use Flarum\Database\Migration;

return Migration::addPermissions([
    'xypp-copyright.edit_all' => Group::MODERATOR_ID,
    'xypp-copyright.edit_own' => Group::MEMBER_ID,
]);
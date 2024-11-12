<?php

/*
 * This file is part of xypp/flarum-copyright-card.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Xypp\CopyrightCard;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\DiscussionValidator;
use Flarum\Discussion\Event\Saving;
use Flarum\Extend;
use Flarum\Extend\Model;
use Flarum\Http\RequestUtil;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Tag;
use Xypp\CopyrightCard\Content\AddDiscussionAttribute;
use Xypp\CopyrightCard\Listener\SaveAttribute;
use Xypp\CopyrightCard\Validator\AddValidator;

$ret = [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    new Extend\Locales(__DIR__ . '/locale'),
    (new Model(Discussion::class))
        ->cast('copyright', 'array'),
    (new Extend\Settings())
        ->serializeToForum(
            'xypp-copyright-card.force-tag',
            'xypp-copyright-card.force-tag',
            fn($value) => json_decode($value, true),
            "[]"
        ),
    (new Extend\Event)
        ->listen(Saving::class, SaveAttribute::class),
    (new Extend\Validator(DiscussionValidator::class))
        ->configure(AddValidator::class),
    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attribute('xypp-copyright.edit', function (DiscussionSerializer $serializer, Discussion $model, $attrs) {
            return (
                RequestUtil::getActor($serializer->getRequest())->can('xypp-copyright.edit_all', $model)
                ||
                (
                    $model->user()->is(RequestUtil::getActor($serializer->getRequest()))
                    &&
                    RequestUtil::getActor($serializer->getRequest())->can('xypp-copyright.edit_own', $model)
                )
            );
        })
        ->attributes(AddDiscussionAttribute::class),
];



if (class_exists(TagSerializer::class))
    $ret[] =
        (new Extend\ApiSerializer(TagSerializer::class))
            ->attribute('xypp-copyright.edit', function (TagSerializer $serializer, Tag $model, $attrs) {
                return (
                    RequestUtil::getActor($serializer->getRequest())->can('xypp-copyright.edit_all', $model)
                    ||
                    RequestUtil::getActor($serializer->getRequest())->can('xypp-copyright.edit_own', $model)
                );
            });
return $ret;
<?php

namespace Xypp\CopyrightCard\Content;

use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Discussion\Discussion;

class AddDiscussionAttribute
{
    public function __invoke(BasicDiscussionSerializer $serializer,Discussion $discussion,$attributes)
    {
        $attributes['copyright'] = $discussion->getAttribute('copyright');
        return $attributes;
    }
}
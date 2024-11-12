<?php

namespace Xypp\CopyrightCard\Listener;

use Flarum\Discussion\Event\Saving;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;

class SaveAttribute
{
    public function __invoke(Saving $event)
    {
        if (Arr::has($event->data, 'attributes.copyright')) {
            if (
                (
                    $event->discussion->user()->is($event->actor)
                    &&
                    $event->actor->can('xypp-copyright.edit_own', $event->discussion)
                )
                ||
                $event->actor->can('xypp-copyright.edit_all', $event->discussion)
            ) {
                $copyright = Arr::get($event->data, 'attributes.copyright');
                $event->discussion->copyright = $copyright;
            } else {
                throw new PermissionDeniedException();
            }
        }
    }
}
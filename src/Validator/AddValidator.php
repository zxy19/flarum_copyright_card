<?php

namespace Xypp\CopyrightCard\Validator;

use Flarum\Foundation\AbstractValidator;
use Illuminate\Support\Arr;
use Illuminate\Validation\Validator;

class AddValidator
{
    static $KEYS_VALIDATOR = ['url', 'title', 'author', 'license', 'type'];
    static $VALID_TYPES = [
        "original",
        "translation",
        "transport",
        "modify",
        "revive",
    ];
    public function __invoke(AbstractValidator $flarumValidator, Validator $validator)
    {
        $validator->addExtension('copyright', function ($attribute, $value, $parameters) {
            $value = json_decode($value, true);
            
            if (!in_array(Arr::get($value, 'current'), self::$VALID_TYPES)) {
                return false;
            }

            $allValue = Arr::get($value, 'all');
            if (!is_array($allValue)) {
                return false;
            }
            foreach ($allValue as $item) {
                if (!Arr::has($item, 'type')) {
                    return false;
                }

                if (!in_array($item['type'], self::$VALID_TYPES)) {
                    return false;
                }

                foreach($item as $key=>$value){
                    if(!in_array($key, self::$KEYS_VALIDATOR)){
                        return false;
                    }
                }
            }

            return true;
        });

        $validator->addRules([
            'copyright' => ['copyright']
        ]);
    }
}
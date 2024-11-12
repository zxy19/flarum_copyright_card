import app from 'flarum/forum/app';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import { extend } from 'flarum/common/extend';
import Button from 'flarum/common/components/Button';
import CopyrightConfigModal from './components/CopyrightConfigModal';
import { COPYRIGHT_DATA, COPYRIGHT_TYPE } from '../common/config';
import ComposerBody from 'flarum/forum/components/ComposerBody';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import Model from 'flarum/common/Model';
import classList from 'flarum/common/utils/classList';
function makeComposerBountyInput(composer: ComposerBody) {
    return () => {
        app.modal.show(CopyrightConfigModal, {
            value: composer.composer.fields.copyright,
            onchange: (copyright: { current: COPYRIGHT_TYPE, all: COPYRIGHT_DATA[] } | null) => {
                if (!copyright)
                    delete composer.composer.fields.copyright;
                else
                    composer.composer.fields.copyright = copyright;
            }
        },true);
    };
}
export default function addDiscussionAction() {
    extend(DiscussionControls, 'moderationControls', function (items, discussion) {
        if (discussion.attribute("xypp-copyright.edit")) {
            items.add('xypp-copyright', Button.component({
                icon: 'fas fa-copyright',
                className: 'Button Button--link',
                onclick: () => {
                    app.modal.show(CopyrightConfigModal, {
                        value: discussion.attribute("copyright"),
                        onchange: (copyright: { current: COPYRIGHT_TYPE, all: COPYRIGHT_DATA[] } | null) => {
                            discussion.save({
                                copyright: copyright
                            });
                        }
                    },true);
                }
            },
                app.translator.trans('xypp-copyright-card.forum.select-copyright'))
            )
        }
    });

    extend(DiscussionComposer.prototype, 'headerItems', function (this: ComposerBody, items) {
        const canSet = !!(
            this.composer.fields.tags
            &&
            this.composer.fields.tags.find((e: Model) => e.attribute<boolean>("xypp-copyright.edit"))
        );

        if (canSet) {
            items.add(
                'copyright',
                <a className="ComposerBody-copyright" onclick={makeComposerBountyInput(this)}>
                    <span className={classList('CopyrightLabel', !this.composer.fields.copyright && 'none')}>
                        {app.translator.trans(`xypp-copyright-card.forum.select-copyright`)}
                    </span>
                </a>,
                1
            );
        }
    });

    extend(DiscussionComposer.prototype, 'data', function (data) {
        if (this.composer?.fields?.copyright) {
            data.copyright = this.composer?.fields?.copyright;
        }
    });
}
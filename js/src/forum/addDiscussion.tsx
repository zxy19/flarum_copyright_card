import CommentPost from "flarum/forum/components/CommentPost";
import { extend } from 'flarum/common/extend';
import { CopyrightCard } from "./components/CopyrightCard";
import app from "flarum/forum/app";
import Model from "flarum/common/Model";
import DiscussionListItem from "flarum/forum/components/DiscussionListItem";
import { COPYRIGHT_DATA, COPYRIGHT_TYPE } from "../common/config";
import Discussion from "flarum/common/models/Discussion";
import classList from "flarum/common/utils/classList";

export function addDiscussion() {
    if ("bodyItems" in (CommentPost.prototype as any))
        extend(CommentPost.prototype, 'bodyItems', function (items) {
            const discussion = this.attrs.post.discussion();
            let hasTag = false;
            if (flarum.extensions['flarum-tags']) {
                const tags = discussion.tags();
                const force = app.forum.attribute<string[]>("xypp-copyright-card.force-tag") || [];
                hasTag = !!(tags && tags.find((e: Model | undefined) => e && force.includes(e.id() + "")));
            }
            if ((discussion && this.attrs.post && this.attrs.post.number() == 1)) {
                const copyright = discussion.attribute("copyright");
                if (copyright || hasTag) {
                    items.add('copyright', CopyrightCard.component({ data: copyright }), 10000);
                }
            }
        });
    else
        extend(CommentPost.prototype, "content", function (items) {
            const discussion = this.attrs.post.discussion();
            let hasTag = false;
            if (flarum.extensions['flarum-tags']) {
                const tags = discussion.tags();
                const force = app.forum.attribute<string[]>("xypp-copyright-card.force-tag") || [];
                hasTag = !!(tags && tags.find((e: Model | undefined) => e && force.includes(e.id() + "")));
            }
            if ((discussion && this.attrs.post && this.attrs.post.number() == 1)) {
                const copyright = discussion.attribute("copyright");
                if (copyright || hasTag) {
                    items.find((e: any) => e.attrs.className == 'Post-body').children.unshift(CopyrightCard.component({ data: copyright }));
                }
            }
        });

    if ("mainItems" in (DiscussionListItem.prototype as any))
        extend(DiscussionListItem.prototype, 'mainItems', function (items) {
            const discussion = this.attrs.discussion as Discussion;
            const copyright = discussion.attribute<{ current: COPYRIGHT_TYPE, all: COPYRIGHT_DATA[] }>("copyright");
            if (copyright) {
                const title = items.get('title');

                items.add('title', <div className="copyright-title">
                    <div className={classList("copyright-prefix", copyright.current)}>
                        {app.translator.trans('xypp-copyright-card.forum.prefix.' + copyright.current)}
                    </div>
                    {title}
                </div>, items.getPriority('title'));
            }
        })
    else
        extend(DiscussionListItem.prototype, 'mainView', function (items) {
            const discussion = this.attrs.discussion as Discussion;
            const copyright = discussion.attribute<{ current: COPYRIGHT_TYPE, all: COPYRIGHT_DATA[] }>("copyright");
            if (copyright) {
                const title = items.children[0];

                items.children[0] = <div className="copyright-title">
                    <div className={classList("copyright-prefix", copyright.current)}>
                        {app.translator.trans('xypp-copyright-card.forum.prefix.' + copyright.current)}
                    </div>
                    {title}
                </div>
            }
        })
}
import Component from "flarum/common/Component";
import { COPYRIGHT_DATA } from "../../common/config";
import classList from 'flarum/common/utils/classList';
import app from "flarum/forum/app";
import ItemList from "flarum/common/utils/ItemList";

export class CopyrightPiece extends Component<{ data: COPYRIGHT_DATA, first: boolean }> {
    view(vnode: any) {
        return <div className={classList("copyright-piece", this.attrs.data.type)}>
            {this.attrs.first ? "" :
                <div className="copyright-piece-type">
                    {app.translator.trans(`xypp-copyright-card.forum.type.${this.attrs.data.type}`)}
                </div>
            }
            <div className="copyright-piece-content">
                {this.content().toArray()}
            </div>
        </div>
    }

    content() {
        const items = new ItemList();

        if (this.attrs.data.author) {
            items.add("author", <div>{app.translator.trans('xypp-copyright-card.forum.copyright.author', { author: this.attrs.data.author })}</div>);
        }
        if (this.attrs.data.title) {
            items.add("title", <div>{app.translator.trans('xypp-copyright-card.forum.copyright.title', { title: this.attrs.data.title })}</div>);
        }
        if (this.attrs.data.url) {
            items.add("url", <div>{app.translator.trans('xypp-copyright-card.forum.copyright.url', { url: this.attrs.data.url, a: <a href={this.attrs.data.url} target="_blank" /> })}</div>);
        }
        if (this.attrs.data.license) {
            items.add("license", <div>{app.translator.trans('xypp-copyright-card.forum.copyright.license', { license: this.attrs.data.license })}</div>);
        }

        return items;
    }
}
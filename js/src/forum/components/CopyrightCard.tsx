import Component from "flarum/common/Component";
import { COPYRIGHT_DATA, COPYRIGHT_TYPE } from "../../common/config";
import classList from 'flarum/common/utils/classList';
import app from "flarum/forum/app";
import ItemList from "flarum/common/utils/ItemList";
import { CopyrightPiece } from "./CopyrightPiece";

export class CopyrightCard extends Component<{ data: { current: COPYRIGHT_TYPE, all: COPYRIGHT_DATA[] } | null }> {
    view(vnode: any) {
        return <div className={classList("copyright-card", this.attrs.data?.current || "none")}>
            <div className="copyright-current-type">
                <i class="fas fa-copyright"></i>
                {app.translator.trans(`xypp-copyright-card.forum.current.${this.attrs.data?.current || "none"}`)}
            </div>
            <div>
                {this.pieces().toArray()}
            </div>
        </div>
    }

    pieces() {
        const items = new ItemList();
        if (!this.attrs.data) return items;

        this.attrs.data.all.forEach((data, i) => {
            items.add(i + "", <CopyrightPiece data={data} first={i == 0 && data.type == this.attrs.data?.current} />);
        });

        return items;
    }
}
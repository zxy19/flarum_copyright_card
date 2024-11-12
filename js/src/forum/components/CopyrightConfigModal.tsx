import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';
import app from 'flarum/forum/app';
import { COPYRIGHT_DATA, COPYRIGHT_TYPE } from '../../common/config';
import ItemList from 'flarum/common/utils/ItemList';
import extractText from 'flarum/common/utils/extractText';
import Select from 'flarum/common/components/Select';
import classList from 'flarum/common/utils/classList';
import { CopyrightPiece } from './CopyrightPiece';
import CopyrightPieceConfigModal from './CopyrightPieceConfigModal';


export default class CopyrightConfigModal extends Modal<{ value: { current: COPYRIGHT_TYPE, all: COPYRIGHT_DATA[] } | null, onchange: (a: { current: COPYRIGHT_TYPE, all: COPYRIGHT_DATA[] }|null) => void } & IInternalModalAttrs> {
    values: COPYRIGHT_DATA[] = [];
    current: Stream<COPYRIGHT_TYPE> = Stream(COPYRIGHT_TYPE.original);
    typeOpt: Partial<Record<COPYRIGHT_TYPE, string>> = {};
    oninit(vnode: any) {
        super.oninit(vnode);
        this.values = this.attrs.value?.all || [];
        this.current(this.attrs.value?.current || COPYRIGHT_TYPE.original);
        for (const key in COPYRIGHT_TYPE) {
            this.typeOpt[key as COPYRIGHT_TYPE] = extractText(app.translator.trans(`xypp-copyright-card.forum.current.${key}`));
        }
    }

    className() {
        return 'Modal Modal--small';
    }

    title() {
        return app.translator.trans('xypp-copyright-card.forum.modal.title');
    }

    content() {
        return (
            <div className="Modal-body">
                {this.items().toArray()}
                <Button className="Button Button--primary Button--block" onclick={this.onsubmit.bind(this)}>
                    {app.translator.trans('xypp-copyright-card.forum.config.submit')}
                </Button>
                <Button className="Button Button--block Button--danger" onclick={this.clear.bind(this)}>
                    {app.translator.trans('xypp-copyright-card.forum.config.clear')}
                </Button>
            </div>
        );
    }

    items() {
        const item = new ItemList();
        item.add("current",
            <div className="Form-group">
                <label for="xypp-copyright-current">{app.translator.trans('xypp-copyright-card.forum.config.current')}</label>
                <Select id="xypp-copyright-current" options={this.typeOpt} onchange={this.current} value={this.current()} />
            </div>
        )

        this.values.forEach((piece, i) => item.add("piece-" + i, this.piece(piece, i)));

        item.add("add", <Button className="Button Button--block" onclick={this.add.bind(this)}>{app.translator.trans('xypp-copyright-card.forum.config.add')}</Button>);
        return item;
    }
    piece(value: COPYRIGHT_DATA, i: number) {
        return <div className="config-piece">
            <CopyrightPiece data={value} />
            <div>
                <Button className="Button Button--block" onclick={this.remove(i)}>
                    {app.translator.trans('xypp-copyright-card.forum.config.remove')}
                </Button>
                <Button className="Button Button--block" onclick={this.edit(i)}>
                    {app.translator.trans('xypp-copyright-card.forum.config.edit')}
                </Button>
            </div>
        </div>
    }

    onsubmit(e: any) {
        e.preventDefault();
        const result: { current: COPYRIGHT_TYPE, all: COPYRIGHT_DATA[] } = {
            current: this.current(),
            all: this.values
        }
        this.attrs.onchange(result);
        app.modal.close();
    }
    clear() {
        this.attrs.onchange(null);
        app.modal.close();
    }
    remove(i: number) {
        return (() => {
            this.values.splice(i, 1);
            m.redraw();
        }).bind(this)
    }

    edit(i: number) {
        return (() => {
            app.modal.show(CopyrightPieceConfigModal, {
                value: this.values[i],
                onchange:((value: COPYRIGHT_DATA) => {
                    this.values[i] = value;
                    m.redraw();
                }).bind(this)
            },true);
        }).bind(this);
    }
    add() {
        this.values.push({
            type: COPYRIGHT_TYPE.original,
            author: '',
            license: '',
            title: '',
            url: ''
        });
        m.redraw();
    }
}
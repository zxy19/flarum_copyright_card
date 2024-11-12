import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';
import app from 'flarum/forum/app';
import { COPYRIGHT_DATA, COPYRIGHT_KEYS, COPYRIGHT_TYPE } from '../../common/config';
import ItemList from 'flarum/common/utils/ItemList';
import extractText from 'flarum/common/utils/extractText';
import Select from 'flarum/common/components/Select';

export default class CopyrightPieceConfigModal extends Modal<{
  value: COPYRIGHT_DATA;
  onchange: (value: COPYRIGHT_DATA) => void;
} & IInternalModalAttrs> {
  type: Stream<COPYRIGHT_TYPE>;
  values: Partial<Record<COPYRIGHT_KEYS, Stream<string>>> = {};
  typeOpt: Partial<Record<COPYRIGHT_TYPE, string>> = {};
  oninit(vnode: any) {
    super.oninit(vnode);

    this.type = Stream(this.attrs.value.type || COPYRIGHT_TYPE.original);

    for (const key in COPYRIGHT_KEYS) {
      this.values[key as COPYRIGHT_KEYS] = Stream(this.attrs.value[key as COPYRIGHT_KEYS] || '');
    }

    for (const key in COPYRIGHT_TYPE) {
      this.typeOpt[key as COPYRIGHT_TYPE] = extractText(app.translator.trans(`xypp-copyright-card.forum.type.${key}`));
    }
  }

  className() {
    return 'Modal Modal--small';
  }

  title() {
    return app.translator.trans('xypp-copyright-card.forum.piece.piece');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form">
          {this.fields().toArray()}
          <div className="Form-group">
            <Button className="Button Button--primary Button--block" onclick={this.onsubmit.bind(this)}>
              {app.translator.trans('xypp-copyright-card.forum.piece.submit')}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  fields() {
    const list = new ItemList<JSX.Element>();

    list.add('type',
      <div className="Form-group">
        <label for="xypp-copyright-type">{app.translator.trans('xypp-copyright-card.forum.piece.type')}</label>
        <Select id="xypp-copyright-type" options={this.typeOpt} value={this.type()} onchange={this.type} />
      </div>
    )

    for (const key in COPYRIGHT_KEYS) {
      const k = key as COPYRIGHT_KEYS;
      list.add(k,
        <div className="Form-group">
          <label for={`xypp-copyright-${k}`}>{app.translator.trans(`xypp-copyright-card.forum.piece.${k}`)}</label>
          <input id={`xypp-copyright-${k}`} required className="FormControl" type="text" bidi={this.values[k]} />
        </div>
      )
    }

    return list;
  }

  onsubmit(e: any) {
    e.preventDefault();
    const value: COPYRIGHT_DATA = {
      type: this.type(),
    };
    for (const key in COPYRIGHT_KEYS) {
      const k = key as COPYRIGHT_KEYS;
      if (this.values[k]())
        value[k] = this.values[k]();
    }
    this.attrs.onchange(value);
    app.modal.close();
  }
}
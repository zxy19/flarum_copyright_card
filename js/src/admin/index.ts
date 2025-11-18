import app from 'flarum/admin/app';

app.initializers.add('xypp/flarum-copyright-card', () => {
  const appExt = app.extensionData.for('xypp-copyright-card')
  if (flarum.extensions['flarum-tags'])
    appExt.registerSetting(
      {
        type: 'flarum-tags.select-tags',
        setting: 'xypp-copyright-card.force-tag',
        label: app.translator.trans('xypp-copyright-card.admin.force-tag'),
        options: {
          requireParentTag: false,
        },
      });
  appExt.registerPermission(
    {
      label: app.translator.trans('xypp-copyright-card.admin.permission.copyright-card.own'),
      permission: 'xypp-copyright.edit_own',
      icon: 'fas fa-copyright',
    },
    'moderate',
    100
  );
  appExt.registerPermission(
    {
      label: app.translator.trans('xypp-copyright-card.admin.permission.copyright-card.all'),
      permission: 'xypp-copyright.edit_all',
      icon: 'fas fa-copyright',
    },
    'moderate',
    100
  );
});

import app from 'flarum/forum/app';
import { addDiscussion } from './addDiscussion';
import addDiscussionAction from './addCopyrightComponent';

app.initializers.add('xypp/flarum-copyright-card', () => {
  addDiscussion();
  addDiscussionAction();
});

import buildMakeComment from './comment.js';
import crypto from 'crypto';
import Id from '../Id/index.js';

const makeCommentFun = buildMakeComment(Id, md5);

function md5(text) {
  return crypto.createHash('md5').update(text, 'utf-8').digest('hex');
}

export default makeCommentFun;

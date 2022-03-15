// import makeAddComment from '../use-cases/index.js';
import makeAddComment from '../use-cases/add-comment.js';
import makeListComments from '../use-cases/list-commnets.js';
import db from '../data-access/index.js';

const addComment = makeAddComment(db);
const listComments = makeListComments(db);

export default Object.freeze({
  addComment,
  listComments,
});

export { addComment, listComments };

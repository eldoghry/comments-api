const db = []; //[]

export default Object.freeze({
  insert: commentObject => {
    db.push(commentObject);
    return commentObject;
  },
  listAll: () => db,
  findByPostId: postId => db.filter(entry => entry.postId === postId),
});

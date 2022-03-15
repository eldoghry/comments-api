export default function makeListComments(dbConnection) {
  return function makeListComments(postId) {
    
    return dbConnection.findByPostId(postId);
  };
}

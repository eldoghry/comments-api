export default function buildMakeComment(Id, md5) {
  return function makeComment({
    id = Id.makeId(),
    author,
    text,
    postId,
    replyToId,
    createdOn = Date.now(),
    modifiedOn = Date.now(),
    published = false,
  } = {}) {
    // handle errors

    if (!Id.isValidId(id)) throw 'Comments must have valid id.';

    if (!author) throw 'Comments must have author.';

    if (author.length < 2) throw 'Comment author must have at least two char.';

    if (!text && text.length < 1)
      throw 'Comments must have at least one character.';

    if (!postId) throw 'Comments must have valid post id.';

    if (replyToId && !Id.isValidId(replyToId))
      throw 'Comments must have valid reply to id.';

    const deletedText = '.xX This comment has been deleted Xx.';

    return Object.freeze({
      getId: () => id,
      getAuthor: () => author,
      getCreatedOn: () => createdOn,
      getModifiedOn: () => modifiedOn,
      getText: () => text,
      getPostId: () => postId,
      getReplyToId: () => replyToId,
      getHash: () => hash || (hash = makeHash()),

      isPublished: () => published,
      isDeleted: () => text === deletedText,

      publish: () => {
        published = true;
      },

      unPublish: () => {
        published = false;
      },

      markDelete: () => {
        text = deletedText;
        author = '';
      },
    });

    function makeHash() {
      return md5(
        text + published + author || '' + postId || '' + replyToId || ''
      );
    }
  };
}

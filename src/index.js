import app from './server.js';
import { addComment, listComments } from './controller/index.js';

app.get('/', (_req, res) => res.status(200).send('Hello'));

app.post('/comments', (req, res) => {
  const commentInfo = req.body;

  const result = addComment(commentInfo);
  console.log(result);

  res.status(201).json(result);
});

app.get('/comments/:postId', (req, res) => {
  const comments = listComments(+req.params.postId);
  res.status(200).json(comments);
});

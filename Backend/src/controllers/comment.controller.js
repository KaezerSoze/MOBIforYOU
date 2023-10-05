// comment.controller.js

import CommentManager from '../models/comment.model.js'; // Assurez-vous que le nom du fichier est correct ici


const commentManager = new CommentManager();

const createComment = async (req, res) => {
  try {
    // Récupérez les données du commentaire depuis req.body
    const { user_id, comment_content } = req.body;

    // Insérez le commentaire dans la base de données
    const result = await commentManager.postCommentByUserId({
      user_id,
      comment_content,
    });

    if (result.affectedRows === 1) {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const currentDate = `${year}-${month}-${day}`;

      // Renvoyez la réponse avec le commentaire créé
      res.status(201).json({
        message: 'Commentaire créé avec succès',
        comment: {
          user_id,
          comment_content,
          comment_date: currentDate,
        },
      });
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    console.error('Erreur lors de la création du commentaire :', error);
    res.sendStatus(500);
  }
};

const getComments = async (req, res) => {
  try {
    // Récupérez tous les commentaires
    const comments = await commentManager.getAllComments();

    res.status(200).json(comments);
  } catch (error) {
    console.error('Erreur lors de la récupération des commentaires :', error);
    res.sendStatus(500);
  }
};

export { createComment, getComments };

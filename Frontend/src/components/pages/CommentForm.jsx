import { useState } from 'react';

function CommentForm({ userId }) {
  const [commentContent, setCommentContent] = useState('');

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch('/login/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          commentContent,
        }),
      });

      if (response.status === 201) {
        // Le commentaire a été enregistré avec succès
        console.log('Commentaire enregistré avec succès.');
        // Vous pouvez réinitialiser le champ de commentaire ici si nécessaire
        setCommentContent('');
      } else {
        console.error('Une erreur s\'est produite lors de l\'enregistrement du commentaire.');
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST :', error);
    }
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        placeholder="Écrivez votre commentaire ici"
      ></textarea>
      <button onClick={handleCommentSubmit}>Envoyer le commentaire</button>
    </div>
  );
}

export default CommentForm;

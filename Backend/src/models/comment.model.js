
import database from '../datasource.js';

class CommentManager {
  constructor() {
    this.database = database;
    this.table = 'user_comments';
  }

  async postCommentByUserId(data) {
    return this.database.query(
      `INSERT INTO ${this.table} (user_id, comment_content, comment_date)
      VALUES (?, ?, NOW())`,
      [data.user_id, data.comment_content]
    );
  }

  async getAllComments() {
    return this.database.query(
      `SELECT user_id, firstname, lastname, comment_content, comment_date FROM ${this.table}
      JOIN users ON users.id = ${this.table}.user_id
      ORDER BY comment_date DESC;`
    );
  }
}

export default CommentManager;

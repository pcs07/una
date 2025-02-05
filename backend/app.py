from flask import Flask, jsonify
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable cross-origin requests

def get_db_connection():
    return pymysql.connect(host="localhost", user="root", password="", database="news_db")

@app.route('/news', methods=['GET'])
def fetch_news():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT title, description, category, image_url FROM news_articles ORDER BY created_at DESC")
    news = cursor.fetchall()
    conn.close()

    news_list = [{"title": row[0], "description": row[1], "category": row[2], "image_url": row[3]} for row in news]
    return jsonify(news_list)

if __name__ == '__main__':
    app.run(debug=True)

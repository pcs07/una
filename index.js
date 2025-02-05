<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>News Articles</title>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f9f9f9;
            flex-direction: column;
        }
        .news-container {
            width: 50vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background: white;
            margin-bottom: 20px;
        }
        .header-logo {
            width: 100%;
            height: 40px;
            background: url('data/image.png') no-repeat center;
            background-size: contain;
        }
        .article-image img {
            width: 100%;
            display: block;
        }
        .article-content {
            width: 100%;
            text-align: left;
        }
        .article-title {
            font-size: 18px;
            font-weight: bold;
            text-decoration: none;
            margin-top: 10px;
            line-height: 34px;
        }
        .article-description {
            margin-top: 10px;
            color: #555;
            font-size: 18px;
            line-height: 34px;
            letter-spacing: 0%;
        }
        .article-category {
            display: inline-block;
            margin-top: 10px;
            padding: 5px 10px;
            background: #ddd;
            font-size: 12px;
            border-radius: 4px;
        }
        .separator-line {
            margin-top: 10px;
            height: 1px;
            background: #ddd;
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="news-container">
        <div class="header-logo"></div>
        <div class="article-image">
            <img src="data/image.png" alt="News Article Image">
        </div>
        <div class="article-content">
            <div class="article-title">Tech Industry Sees AI Boom</div>
            <div class="article-description">The AI industry is experiencing an unprecedented surge, with companies investing heavily in new innovations. Experts predict AI-driven automation will redefine industries, boosting productivity and economic growth. However, concerns about job displacement and ethical considerations remain prevalent. Governments worldwide are introducing regulations to ensure responsible AI development and deployment.</div>
            <div class="article-category">Technology</div>
        </div>
        <div class="separator-line"></div>
    </div>
    <div class="news-container">
        <div class="article-image">
            <img src="data/image.png" alt="News Article Image">
        </div>
        <div class="article-content">
            <div class="article-title">Global Markets React to Economic Shifts</div>
            <div class="article-description">Financial experts analyze the impact of global economic trends on emerging markets and investment strategies. Recent fluctuations in interest rates and inflation have led to volatile stock market conditions. Investors are advised to diversify portfolios and adopt long-term strategies. Analysts predict future growth will depend on geopolitical stability and policy decisions.</div>
            <div class="article-category">Finance</div>
        </div>
        <div class="separator-line"></div>
    </div>
    <div class="news-container">
        <div class="article-image">
            <img src="data/image.png" alt="News Article Image">
        </div>
        <div class="article-content">
            <div class="article-title">Climate Change and Renewable Energy</div>
            <div class="article-description">Governments worldwide push for renewable energy adoption as climate concerns grow. Solar and wind power investments have surged, reducing dependence on fossil fuels. Scientists warn that immediate action is necessary to mitigate environmental damage. Green technologies are expected to dominate energy production in the coming decades.</div>
            <div class="article-category">Environment</div>
        </div>
        <div class="separator-line"></div>
    </div>
    <div class="news-container">
        <div class="article-image">
            <img src="data/image.png" alt="News Article Image">
        </div>
        <div class="article-content">
            <div class="article-title">Breakthrough in Space Exploration</div>
            <div class="article-description">NASA unveils plans for a new mission that aims to explore deep space like never before. The mission will involve cutting-edge technology, enabling scientists to gather data on distant galaxies. Experts believe these advancements could pave the way for human colonization of other planets. Funding for the project has received bipartisan support, highlighting its significance.</div>
            <div class="article-category">Science</div>
        </div>
        <div class="separator-line"></div>
    </div>
    <div class="news-container">
        <div class="article-image">
            <img src="data/image.png" alt="News Article Image">
        </div>
        <div class="article-content">
            <div class="article-title">Sports Legends Reflect on Their Careers</div>
            <div class="article-description">Former sports icons share insights and reflections on their legendary careers in exclusive interviews. They discuss the challenges and triumphs that shaped their journeys. Many athletes emphasize the importance of discipline and perseverance. Fans get a rare glimpse into the personal lives of these celebrated figures.</div>
            <div class="article-category">Sports</div>
        </div>
        <div class="separator-line"></div>
    </div>
</body>
</html>

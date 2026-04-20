# 🎯 Catch the Box Game

A simple and fun browser-based game built using **HTML, CSS, and JavaScript**, deployed on AWS EC2 with Nginx, and pushed to GitHub directly from the EC2 instance.

---

## 🚀 Project Overview

**Catch the Box** is a fast-paced game where:

* A box appears randomly on the screen
* Player clicks the box to score points
* The game runs for 30 seconds
* Final score is displayed at the end

---

## 🛠️ Tech Stack

* HTML
* CSS
* JavaScript
* AWS EC2 (Ubuntu/Linux)
* Nginx (for hosting)
* Git & GitHub

---

## ☁️ Deployment on AWS EC2

This project was created and deployed using an EC2 instance:

### Steps followed:

1. Launched an EC2 instance on Amazon Web Services
2. Installed Nginx:

   ```bash
   sudo apt update
   sudo apt install nginx -y
   ```
3. Created project directory:

   ```bash
   cd /var/www/html
   mkdir catch-the-box
   cd catch-the-box
   ```
4. Created project files:

   ```bash
   touch index.html style.css script.js
   ```
5. Hosted using Nginx:

   * Project served from `/var/www/html/catch-the-box`
   * Access via: `http://<EC2-PUBLIC-IP>/catch-the-box`

---

## 📂 Project Structure

```
catch-the-box/
│── index.html
│── style.css
│── script.js
```

---

## 🔧 GitHub Workflow (from EC2)

The project was pushed to GitHub directly from the EC2 instance:

```bash
git init
git add .
git commit -m "Catch the Box game deployed from EC2"
git branch -M main
git remote add origin https://github.com/your-username/catch-the-box.git
git push -u origin main
```

Authentication was done using a **Personal Access Token (PAT)**.

---

## 🎮 How to Play

1. Click **Start Game**
2. A box will appear randomly
3. Click it as fast as possible
4. Score points before time runs out

---

## ✨ Features

* Interactive UI
* Random box movement
* Score tracking
* Countdown timer
* Simple and lightweight

---

## 📌 Future Improvements

* Add sound effects 🔊
* Add difficulty levels 🎯
* Add leaderboard 🏆
* Improve UI animations ✨

---

## 📜 License

This project is open-source and can be used freely.
(You can add MIT License here if needed)

---

## 🙌 Author

Developed by **Sanjay Desai**
Built and deployed using AWS EC2 🚀

---


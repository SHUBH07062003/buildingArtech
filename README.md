# 🏗️ BuildArtech — AI-Based Building Architecture Generator

BuildArtech is an AI-integrated full-stack web application that generates architectural designs from user inputs using LLMs (via Ollama) and generates floor plan-style images using Stable Diffusion.

## 🚀 Tech Stack

- **Frontend**: React.js + Tailwind CSS  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB (via Mongoose)  
- **AI Integration**:
  - Text Generation: Ollama (LLaMA 3 model)
  - Image Generation: Stable Diffusion (AUTOMATIC1111 Web UI)
- **Authentication**: JWT-based Admin & User login  
- **Image Hosting**: Locally stored + download feature  
- **Email**: Nodemailer (contact form support)

---

## 📸 Preview


![Screenshot 2025-06-05 220358](https://github.com/user-attachments/assets/bebb96fe-8fc6-49a6-a565-9e2118869c28)
![Screenshot 2025-06-05 220349](https://github.com/user-attachments/assets/e7acf769-895d-48a1-aa9e-5845f4c2b02a)
![Screenshot 2025-06-05 220332](https://github.com/user-attachments/assets/909443fe-1724-409d-844c-199f96cbbe8c)
![Screenshot 2025-06-05 220319](https://github.com/user-attachments/assets/aa277037-c3b7-48c5-a49d-946fa9e2a651)
![Screenshot 2025-06-05 220302](https://github.com/user-attachments/assets/a0bfc41d-732a-423f-ba51-8e8927ef320e)
![Screenshot 2025-06-05 220245](https://github.com/user-attachments/assets/0f245f63-6634-4f6a-8b57-9450eba4d09c)
![Screenshot 2025-06-05 220234](https://github.com/user-attachments/assets/637aec09-ed4d-482c-81cc-2660d4b2ccac)
![Screenshot 2025-06-05 220226](https://github.com/user-attachments/assets/5502249e-4255-4c59-a5fe-fe8f282933ab)
![Screenshot 2025-06-05 220215](https://github.com/user-attachments/assets/998d7986-8f77-4722-92e8-2eba7b25aa9b)

---

## 📁 Folder Structure
root/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js
├── frontend/
│ ├── public/
│ └── src/
│ ├── pages/
│ ├── components/
│ └── App.js


---

## 🧠 Features

- ✅ User and Admin login system  
- ✅ Submit building design requests  
- ✅ AI (LLaMA 3) generates design descriptions from user inputs  
- ✅ Image generation using Stable Diffusion from AI prompts  
- ✅ Downloadable floor plans  
- ✅ Search & filter designs  
- ✅ Nodemailer contact form  
- ✅ Responsive & modern UI  

---

## 🖥️ Local Installation Guide

### ⚙️ 1. Clone the Repository

```bash
git clone https://github.com/SHUBH07062003/BuildArtech.git
cd BuildArtech
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install


🤖 AI Integration Setup
🧠 3. Ollama Installation (LLaMA 3 for text generation)
LLaMA 3 (~4.7 GB) will generate architectural design descriptions.

👉 Steps:
Download & install Ollama: https://ollama.com/download

Open terminal and run:
ollama run llama3

Your backend will use this to send prompts:
POST /api/text/generate
Body: { "prompt": "I want a 3-floor building with 5 bedrooms" }


🎨 4. Stable Diffusion Web UI Setup (for image generation)
Uses local AUTOMATIC1111 interface (default port 7860).

👉 Steps:
Clone repo: https://github.com/AUTOMATIC1111/stable-diffusion-webui

Run setup:
# On Windows, just double-click this file:
webui-user.bat


Wait for server to start at: http://127.0.0.1:7860

Your backend will send image prompts like:
POST http://127.0.0.1:7860/sdapi/v1/txt2img
Body: { "prompt": "Generate a modern villa with..." }


🛠️ Environment Setup
📄 Create .env file in backend/ folder:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password_or_app_password


Run the Project Locally
# Start Backend
cd backend
nodemon server.js

# Start Frontend
cd ../frontend
npm start


📬 API Routes Overview
🧾 Text & Image Generation
POST /api/text/generate         # Sends prompt to LLaMA 3 via Ollama
POST /api/image/generate        # Sends prompt to Stable Diffusion Web UI


🧑 Auth Routes
POST /api/admin/register        # Admin signup
POST /api/admin/login           # Admin login
POST /api/user/register         # User signup
POST /api/user/login            # User login


📂 Design Submission
POST /api/design/submit         # Save a user’s design request
GET  /api/design/get            # Fetch all design entries (admin only)


👤 Author
Shubh

🔗 GitHub: @SHUBH07062003

📧 Email: 03shubh.shukla@example.com


🛡️ License
MIT License — use freely for personal & educational purposes.


📌 Note
Do NOT commit .env files — they contain secrets!

Ensure Stable Diffusion and Ollama are running locally before starting backend.

You can add Firebase or cloud storage if you want remote hosting for images in the future.



@echo off
echo ===================================================
echo   Starting Saral Banking Web App Prototype...
echo ===================================================
echo.
echo Local server running at: http://localhost:8000
echo Real AI Chat Endpoint at: http://localhost:8000/api/chat
echo.
echo (To configure Gemini AI, copy .env.example to .env and add your key)
echo.
start "" "http://localhost:8000"
python server.py 8000
pause

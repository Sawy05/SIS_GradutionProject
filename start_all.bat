@echo off
echo =======================================================
echo   SIS Uni Assist - Starting Backend and Mobile App
echo =======================================================

start "SIS FastAPI Backend (Port 8000)" cmd /k "cd backend && python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload"
timeout /t 2 /nobreak >nul

start "SIS Mobile App Frontend (Port 5173)" cmd /k "cd frontend && npm run dev -- --host 127.0.0.1 --port 5173"

echo.
echo Systems launched successfully!
echo - Backend API:  http://127.0.0.1:8000
echo - Swagger Docs: http://127.0.0.1:8000/docs
echo - Mobile Web App: http://127.0.0.1:5173
echo =======================================================
pause

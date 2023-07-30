@echo off

rem Change directory to the "PortfolioPrime" directory
cd /d "C:\Users\fordm\Documents\Github\PortfolioPrime"

rem Open command prompt for Flask Server
start "Flask Server" cmd /k python app.py

rem Change directory to "documents\github\React-Flask-Boilerplate"
cd /d "documents\github\React-Flask-Boilerplate"

rem Open command prompt for React Server
start "React Server" cmd /k npm start


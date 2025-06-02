# Manim Video Generator

## Project Overview

This project is used to visualize any mathematical concepts or theorems in an animated version using the powerful `Manim` library and the Gemini API. You just have to give prompt to Gemini and it will generate a script for you. Simply run the script and get the video.

## ℹ️ Setup

To get this project up and running on your local machine, follow these steps:

### 1. Clone the Repository

`git clone https://github.com/dovbyk/manim-video-generator`

### 2. Install Python dependencies
Run this command : `pip install -m requirement.txt`

### 3. Install system dependencies
Run these commands in your Terminal
```
sudo apt install texlive texlive-latex-extra texlive-fonts-recommended dvipng dvisvgm
sudo apt install libpango1.0-dev libcairo2-dev
sudo apt install ffpmeg
```

## 🚀Get Started

* Run the inference.py file with your prompt on a particular topic
* You can modify the existing system promot to customize the video like you want.
* A new .py file will be created on your working directory
* This new file is the LLM generated code which won't give any runtime error if the current system prompt is used.
* Run this command and get the video `manim -pql llm_generated_file.py ClassName`
* The `ClassName` will be the main class name which you will get in the new generated file. Just add that class name.
* Your video will be saved in `media` directory which will be automatically created.



## ⚠️ Disclaimer
* Make sure to get your Free Gemini API and add in .env file `GENAI_API_KEY = YOUR_API_KEY`
* Run the project in a virtual environment to isolate the dependencies used in this specific project.
* Run this command to create virtual enviroment in Python `python -m venv venv`
* Activate your virtual environment.
  * On Linux/Macos `source venv/bin/activate`
  * On Windows/Command Prompt `venv\Scripts\activate.bat`
* Be very carefull while modifying the system prompt because it can lead Gemini to generate erroneous code.


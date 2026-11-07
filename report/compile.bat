@echo off
echo ================================================================
echo Compiling Digital Food Atlas of India Technical Report (LaTeX)
echo ================================================================

where pdflatex >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] pdflatex was not found in your PATH.
    echo Please install MiKTeX or TeX Live, or upload this directory to Overleaf.com.
    pause
    exit /b 1
)

echo [1/4] Running pdflatex (Pass 1)...
pdflatex -interaction=nonstopmode main.tex

echo [2/4] Running bibtex...
bibtex main

echo [3/4] Running pdflatex (Pass 2)...
pdflatex -interaction=nonstopmode main.tex

echo [4/4] Running pdflatex (Pass 3 - Final Cross-references)...
pdflatex -interaction=nonstopmode main.tex

echo ================================================================
echo Compilation Complete! Output generated: main.pdf
echo ================================================================
pause

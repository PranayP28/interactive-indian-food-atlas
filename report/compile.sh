#!/usr/bin/env bash
set -e

echo "================================================================"
echo "Compiling Digital Food Atlas of India Technical Report (LaTeX)"
echo "================================================================"

if ! command -v pdflatex &> /dev/null; then
    echo "[ERROR] pdflatex command could not be found."
    echo "Please install TeX Live (sudo apt install texlive-full) or upload to Overleaf.com"
    exit 1
fi

echo "[1/4] Running pdflatex (Pass 1)..."
pdflatex -interaction=nonstopmode main.tex

echo "[2/4] Running bibtex..."
bibtex main

echo "[3/4] Running pdflatex (Pass 2)..."
pdflatex -interaction=nonstopmode main.tex

echo "[4/4] Running pdflatex (Pass 3 - Final Cross-references)..."
pdflatex -interaction=nonstopmode main.tex

echo "================================================================"
echo "Compilation Successful! Output: main.pdf"
echo "================================================================"

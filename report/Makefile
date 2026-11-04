# Makefile for compiling the Digital Food Atlas of India Technical Report

MAIN = main
BIB = references

all: $(MAIN).pdf

$(MAIN).pdf: $(MAIN).tex $(BIB).bib
	pdflatex $(MAIN)
	bibtex $(MAIN)
	pdflatex $(MAIN)
	pdflatex $(MAIN)

quick:
	pdflatex $(MAIN)

latexmk:
	latexmk -pdf $(MAIN)

clean:
	rm -f *.aux *.bbl *.blg *.log *.out *.toc *.lof *.lot *.fls *.fdb_latexmk *.synctex.gz

distclean: clean
	rm -f $(MAIN).pdf

.PHONY: all quick latexmk clean distclean

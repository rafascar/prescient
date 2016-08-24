%  partialreport.cls
%  Partial Report class
%  Intel® Embedded Systems Competition 2016
%  VI Brazilian Symposium on Computing Systems Engineering (SBESC)
% 2016-June-07 Paula Moraes paula.santana.de.moraes (at) intel.com

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{partialreport}[2016/06/07 Partial Report Class ] 
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax
\LoadClass[a4paper,11pt]{article}
\RequirePackage[T1]{fontenc}
\RequirePackage[utf8]{inputenc}
\RequirePackage{fancyhdr}
\RequirePackage{graphicx}
\RequirePackage[left=3cm,right=3cm,top=2.5cm,bottom=2.5cm]{geometry}
\RequirePackage{tabularx}
\RequirePackage{ltablex}
\RequirePackage{ragged2e}
\renewcommand{\familydefault}{phv} %helvetica

\fancypagestyle{document}{
	\fancyhf{} 
	\renewcommand{\headrulewidth}{0.4pt}
	\renewcommand{\footrulewidth}{0pt}
	\fancyhead[R]{\includegraphics[keepaspectratio,height=0.91cm]{intel_icon.png}}
	\fancyhead[C]{\@projectTitle}
	\fancyhead[L]{\includegraphics[keepaspectratio,height=0.71cm]{sbesc_icon.png}}
	\fancyfoot[C]{\thepage}
}
\fancypagestyle{intelsbesctitle}{
	\fancyhf{} 
	\renewcommand{\headrulewidth}{0.4pt}
	\renewcommand{\footrulewidth}{0.4pt}
	\fancyhead[R]{\includegraphics[keepaspectratio,height=0.91cm]{intel_icon.png}}
	\fancyhead[C]{\@projectTitle}
	\fancyhead[L]{\includegraphics[keepaspectratio,height=0.71cm]{sbesc_icon.png}}
	\fancyfoot[C]{\@eventYear{} SBESC -- Intel Embedded Systems Competition}
}

\pagestyle{document}
\setlength{\headheight}{32pt}

\newcommand*{\@proposedSchedule}{}
\newcommand*{\proposedSchedule}[1]{\renewcommand*{\@proposedSchedule}{#1}}

\newcommand*{\@updatedSchedule}{}
\newcommand*{\updatedSchedule}[1]{\renewcommand*{\@updatedSchedule}{#1}}

\newcommand*{\@eventYear}{2016}
\newcommand*{\eventYear}[1]{\renewcommand*{\@eventYear}{#1}}

\newcommand*{\@projectTitle}{}
\newcommand*{\projectTitle}[1]{\renewcommand*{\@projectTitle}{#1}}

\newcommand*{\@idJems}{}
\newcommand*{\idJems}[1]{\renewcommand*{\@idJems}{#1}}

\newcommand*{\@dateReport}{}
\newcommand*{\dateReport}[1]{\renewcommand*{\@dateReport}{#1}}

\newcommand*{\@studentsNames}{}
\newcommand*{\studentsNames}[1]{\renewcommand*{\@studentsNames}{#1}}

\newcommand*{\@professorName}{}
\newcommand*{\professorName}[1]{\renewcommand*{\@professorName}{#1}}

\newcommand*{\@university}{}
\newcommand*{\university}[1]{\renewcommand*{\@university}{#1}}

\renewenvironment{titlepage}{%
	\thispagestyle{intelsbesctitle}
	\@restonecolfalse\newpage
}{\newpage\setcounter{page}\@ne}

\renewcommand\@maketitle{
	\begin{titlepage} 
	\vspace*{5cm}
		\begin{center}
			{\Huge\bfseries Partial Report}\\[6cm]
		\end{center}
		\begin{flushleft}
			%{\large \textbf{Project Title: }\@projectTitle}\\[0.5cm]
			%{\large \textbf{ID JEMS: }\@idJems}\\[2cm]
			\Large
			\begin{tabular}{rl}
				\textbf{Project Title:}&
				\parbox[t]{2\textwidth}{
					\raggedright
					\linespread{1}\selectfont
					\@projectTitle
				}\\[1mm]
				\textbf{ID JEMS:}&
				\parbox[t]{0.5\textwidth}{
					\raggedright
					\linespread{1}\selectfont
					\@idJems
					}
			\end{tabular} \\[3cm]
		\end{flushleft}
		\begin{center}
			\linespread{2}\selectfont
			{\large
				\begin{tabular}{rl}
					\textbf{Students:}&
					\parbox[t]{2\textwidth}{
						\raggedright
						\linespread{1}\selectfont
						\@studentsNames
					}\\
					\textbf{Professor:}&
					\parbox[t]{0.5\textwidth}{
						\raggedright
						\linespread{1}\selectfont
						\@professorName
					}\\
					\textbf{University:}&
					\parbox[t]{0.5\textwidth}{
						\raggedright
						\linespread{1}\selectfont
						\@university
					}
				\end{tabular}
			}
			\vfill
		\end{center}
	\end{titlepage}


	\begin{titlepage}
		\vspace*{3cm} \normalsize
		\section*{\centering\bfseries Declaration of Responsibility}
		\vskip 2cm
		\noindent
		We, students from project ID \@idJems, hereby declare that the provided information in this report is true, under supervision of our professor who signed below. 
		\vskip 3cm

		\begin{flushleft}
			{Professor's name: \raggedright\@professorName}\\[1.5cm]
			{Professor's signature: \hrulefill}\\[1.5cm]
			{Date: \@dateReport }
		\end{flushleft}	
	\end{titlepage}
}

\newcommand\content{%
	\thispagestyle{document}
	\newpage\setcounter{page}\@ne
}

% \newcommand\oldScheduleTable{
	% \begin{raggedleft}
	% \vskip 0.5cm \large
	% \centering
	% \begin{tabular}{ll} % centered columns (4 columns)
		% Date & Task  \\ [1ex] % inserts table
		% \@proposedSchedule
	% \end{tabular}
	% \end{raggedleft}
	% \newpage
% }
\newcommand\oldScheduleTable{
	\begin{raggedleft}
	\vspace*{-0.6cm} 
	\normalsize
	\setlength\LTleft\parindent
	\setlength{\extrarowheight}{5pt}
	%\begin{tabularx}{\textwidth}{*{2}{>{\ragged\arraybackslash}X}}% centered columns (4 columns)
	\begin{tabularx}{\linewidth}{@{}>{\bfseries}l@{\hspace{.9em}}X@{}}
		\mdseries Date & Task \\ % inserts table
		\hline
		\@proposedSchedule
	\end{tabularx}
	\end{raggedleft}
	\newpage
}

\newcommand\newScheduleTable{
	\begin{raggedleft}
	\vspace*{-0.8cm} 
	\normalsize
	\centering
	\noindent
	\setlength{\extrarowheight}{5pt}
	%\begin{tabularx}{\textwidth}{*{3}{>{\raggedright\arraybackslash}X}}% centered columns (4 columns)
	\begin{tabularx}{\linewidth}{@{}>{\bfseries}l@{\hspace{.7em}}X@{\hspace{.7em}}c@{}}
		\mdseries Date & Task & Percentage \\ % inserts table
		\hline
		\@updatedSchedule
	\end{tabularx}
	\end{raggedleft}
	\newpage
}


\endinput
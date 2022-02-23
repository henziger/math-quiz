const questions = [
    {
        question: "\\text{Vad är derivatan av }sin(x)?",
        key: "Q1",
        category: "calculus",
        answers: [
            {text: "cos(x)", key: "1a"},
            {text: "-sin(x)", key: "1b"},
            {text: "tan(x)", key: "1c"},
            {text: "cos(x)", key: "1d"}
        ],
        correct: 0
    },
    {
        question: "\\text{Bestäm den lösning till differentialekvationen }y'' + 2y' - 8y = (5x + 6)e^{x}\\text{, som uppfyller }y(0) = 0 y'(0) = 1.",
        key: "Q2",
        category: "diffeq",
        answers: [
            {text: "y = 2e^{x} - (x + 2)e^{x}", key: "2a"},
            {text: "y = e^{2x} - (x + 1)e^{x}", key: "2b"},
            {text: "y = 2e^{2x} - (x + 2)e^{2x}", key: "2c"},
            {text: "y = 2e^{2x} - (x + 2)e^{x}", key: "2d"}
        ],
        correct: 3
    },
    {
        question: "\\text{Låt }A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 3 & 5 & 7 \\\\ 9 & 7 & 3 \\end{pmatrix}\\text{, ange }A^{T}.",
        key: "Q3",
        category: "linalg",
        answers: [
            {text: "A^{T} = \\begin{pmatrix} 1 & 2 & 1 \\\\ 7 & 5 & 3 \\\\ 3 & 7 & 9 \\end{pmatrix}", key: "3a"},
            {text: "A^{T} = \\begin{pmatrix} 9 & 7 & 3 \\\\ 2 & 5 & 7 \\\\ 1 & 3 & 9 \\end{pmatrix}", key: "3b"},
            {text: "A^{T} = \\begin{pmatrix} 1 & 3 & 9 \\\\ 2 & 5 & 7 \\\\ 1 & 7 & 3 \\end{pmatrix}", key: "3c"},
            {text: "A^{T} = \\begin{pmatrix} 9 & 3 & 1 \\\\ 7 & 5 & 2 \\\\ 3 & 7 & 1 \\end{pmatrix}", key: "3d"}
        ],
        correct: 2
    },
    {
        question: "\\text{Ange alla positiva heltal }(x, y)\\text{ sådana att }198x + 77y = 3476.",
        category: "discrete",
        key: "Q4",
        answers: [
            {text: "(x, y) = (15, 5), (10, 21)\\text{ och }(3, 39)", key: "4a"},
            {text: "(x, y) = (17, 3), (11, 23)\\text{ och }(3, 41)", key: "4b"},
            {text: "(x, y) = (19, 2), (8, 24)\\text{ och }(2, 42)", key: "4c"},
            {text: "(x, y) = (16, 4), (9, 22)\\text{ och }(2, 40)", key: "4d"}
        ],
        correct: 3
    },
    {
        question:  "\\text{Beräkna dubbelintegralen }\\newline \\int\\int_D (2x^{2} + y^{2}+ 1) dxdy, \\newline \\text{där D är området som ges av }x^{2} + y^{2} \\le 4\\text{ och }x \\le y.",
        key: "Q5",
        category: "multicalc",
        answers: [
            {text: "3", key: "5a"},
            {text: "5", key: "5b"},
            {text: "4\\pi", key: "5c"},
            {text: "8\\pi", key: "5d"}
        ],
        correct: 3
    },
    {
        question: "\\text{Vad är derivatan av }ln(x)",
        key: "Q6",
        category: "calculus",
        answers: [
            {text: "x^{e}", key: "6a"},
            {text: "\\frac{1}{x}", key: "6b"},
            {text: "tan(x)", key: "6c"},
            {text: "\\text{Ej definierat}", key: "6d"}
        ],
        correct: 1
    },
    {
        question: "\\text{Spökplumpen har en sexsidig viktad fusktärning.}\\newline \\text{Låt X vara slumpvariabeln för tärningens utfall.}\\newline \\text{Då gäller att } \\newline P(X = x) = \\begin{cases} 3/20,  & \\text{för x = 1, 2, 3, 4} \\\\ 1/5, & \\text{för x = 5, 6} \\end{cases}\\newline \\text{Ange väntevärdet }\\mathbb{E}X\\text{ och variansen }Var(X).",
        key: "Q7",
        category: "statistics",
        answers: [
            {text: "\\mathbb{E}X = 3.5, Var(X) = 3.2", key: "7a"},
            {text: "\\mathbb{E}X = 3.7, Var(X) = 3.01", key: "7b"},
            {text: "\\mathbb{E}X = 3.2, Var(X) = 2.5", key: "7c"},
            {text: "\\mathbb{E}X = 3.9, Var(X) = 2.8", key: "7d"}
        ],
        correct: 1
    },
    {
        question: "\\text{Låt }A = \\begin{pmatrix} 2 & -2 & 0 \\\\ -1 & 5 & 1 \\\\ 3 & 4 & 5 \\end{pmatrix}\\text{, ange }det(A).",
        key: "Q8",
        category: "linalg",
        answers: [
            {text: "det(A) = 34", key: "8a"},
            {text: "det(A) = 32", key: "8b"},
            {text: "det(A) = 26", key: "8c"},
            {text: "det(A) = 40", key: "8d"}
        ],
        correct: 2
    },
];

export default questions;
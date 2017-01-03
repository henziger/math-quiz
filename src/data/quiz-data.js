import React from 'react';
import MathJax from 'react-mathjax'

export const questions = [
    {
        question: <MathJax.Context><div>
            Vad är derivatan av <MathJax.Node inline>{"sin(x)"}</MathJax.Node>?
        </div></MathJax.Context>,
        key: "Q1",
        category: "calculus",
        answers: [
            {text: <MathJax.Context><MathJax.Node inline>{"cos(x)"}</MathJax.Node></MathJax.Context>, key: "1a"},
            {text: <MathJax.Context><MathJax.Node inline>{"-sin(x)"}</MathJax.Node></MathJax.Context>, key: "1b"},
            {text: <MathJax.Context><MathJax.Node inline>{"tan(x)"}</MathJax.Node></MathJax.Context>, key: "1c"},
            {text: <MathJax.Context><MathJax.Node inline>{"-cos(x)"}</MathJax.Node></MathJax.Context>, key: "1d"}
        ],
        correct: 0
    },
    {
        question: <MathJax.Context><div>
            Bestäm den lösning till differentialekvationen
            <MathJax.Node>{"y'' + 2y' - 8y = (5x + 6)e^{x},"}</MathJax.Node>
            som uppfyller <MathJax.Node inline>{"y(0) = 0"}</MathJax.Node> och <MathJax.Node inline>{"y'(0) = 1"}</MathJax.Node>.
        </div></MathJax.Context>,
        key: "Q2",
        category: "diffeq",
        answers: [
            {text: <MathJax.Context><MathJax.Node inline>{"y = 2e^{x} - (x + 2)e^{x}"}</MathJax.Node></MathJax.Context>, key: "2a"},
            {text: <MathJax.Context><MathJax.Node inline>{"y = e^{2x} - (x + 1)e^{x}"}</MathJax.Node></MathJax.Context>, key: "2b"},
            {text: <MathJax.Context><MathJax.Node inline>{"y = 2e^{2x} - (x + 2)e^{2x}"}</MathJax.Node></MathJax.Context>, key: "2c"},
            {text: <MathJax.Context><MathJax.Node inline>{"y = 2e^{2x} - (x + 2)e^{x}"}</MathJax.Node></MathJax.Context>, key: "2d"}
        ],
        correct: 3
    },
    {
        question: <MathJax.Context><div>
            Låt <MathJax.Node inline>{"A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 3 & 5 & 7 \\\\ 9 & 7 & 3 \\end{pmatrix}"}</MathJax.Node>, ange <MathJax.Node inline>{"A^{T}"}</MathJax.Node>.
        </div></MathJax.Context>,
        key: "Q3",
        category: "linalg",
        answers: [
            {text: <MathJax.Context>
                <MathJax.Node inline>{"A^{T} = \\begin{pmatrix} 1 & 2 & 1 \\\\ 7 & 5 & 3 \\\\ 3 & 7 & 9 \\end{pmatrix}"}</MathJax.Node>
            </MathJax.Context>, key: "3a"},
            {text: <MathJax.Context>
                <MathJax.Node inline>{"A^{T} = \\begin{pmatrix} 9 & 7 & 3 \\\\ 2 & 5 & 7 \\\\ 1 & 3 & 9 \\end{pmatrix}"}</MathJax.Node>
            </MathJax.Context>, key: "3b"},
            {text: <MathJax.Context>
                <MathJax.Node inline>{"A^{T} = \\begin{pmatrix} 1 & 3 & 9 \\\\ 2 & 5 & 7 \\\\ 1 & 7 & 3 \\end{pmatrix}"}</MathJax.Node>
            </MathJax.Context>, key: "3c"},
            {text: <MathJax.Context>
                <MathJax.Node inline>{"A^{T} = \\begin{pmatrix} 9 & 3 & 1 \\\\ 7 & 5 & 2 \\\\ 3 & 7 & 1 \\end{pmatrix}"}</MathJax.Node>
            </MathJax.Context>, key: "3d"}
        ],
        correct: 2
    },
    {
        question: <MathJax.Context><div>
            Ange alla positiva heltal <MathJax.Node inline>{"(x, y)"}</MathJax.Node> sådana att <MathJax.Node inline>{"198x + 77y = 3476."}</MathJax.Node>
        </div></MathJax.Context>,
        category: "discrete",
        key: "Q4",
        answers: [
            {text: <MathJax.Context><div><MathJax.Node inline>{"(x, y) = (15, 5), (10, 21)"}</MathJax.Node> och <MathJax.Node inline>{"(3, 39)"}</MathJax.Node></div></MathJax.Context>, key: "4a"},
            {text: <MathJax.Context><div><MathJax.Node inline>{"(x, y) = (17, 3), (11, 23)"}</MathJax.Node> och <MathJax.Node inline>{"(3, 41)"}</MathJax.Node></div></MathJax.Context>, key: "4b"},
            {text: <MathJax.Context><div><MathJax.Node inline>{"(x, y) = (19, 2), (8, 24)"}</MathJax.Node> och <MathJax.Node inline>{"(2, 42)"}</MathJax.Node></div></MathJax.Context>, key: "4c"},
            {text: <MathJax.Context><div><MathJax.Node inline>{"(x, y) = (16, 4), (9, 22)"}</MathJax.Node> och <MathJax.Node inline>{"(2, 40)"}</MathJax.Node></div></MathJax.Context>, key: "4d"}
        ],
        correct: 3
    },
    {
        question:  <MathJax.Context><div>
            Beräkna dubbelintegralen
            <MathJax.Node>{"\\int\\int_D (2x^{2} + y^{2}+ 1) dxdy,"}</MathJax.Node>
            där <MathJax.Node inline>D</MathJax.Node> är området som ges av <MathJax.Node inline>{"x^{2} + y^{2} \\le 4"}</MathJax.Node> och <MathJax.Node inline>{"x \\le y"}</MathJax.Node>
            .</div></MathJax.Context>,
        key: "Q5",
        category: "multicalc",
        answers: [
            {text: <MathJax.Context><MathJax.Node inline>{"3"}</MathJax.Node></MathJax.Context>, key: "5a"},
            {text: <MathJax.Context><MathJax.Node inline>{"5"}</MathJax.Node></MathJax.Context>, key: "5b"},
            {text: <MathJax.Context><MathJax.Node inline>{"4\\pi"}</MathJax.Node></MathJax.Context>, key: "5c"},
            {text: <MathJax.Context><MathJax.Node inline>{"8\\pi"}</MathJax.Node></MathJax.Context>, key: "5d"}
        ],
        correct: 3
    },
    {
        question: <MathJax.Context><div>
            Vad är derivatan av <MathJax.Node inline>{"ln(x)"}</MathJax.Node>?
        </div></MathJax.Context>,
        key: "Q6",
        category: "calculus",
        answers: [
            {text: <MathJax.Context><MathJax.Node inline>{"x^{e}"}</MathJax.Node></MathJax.Context>, key: "6a"},
            {text: <MathJax.Context><MathJax.Node inline>{"\\frac{1}{x}"}</MathJax.Node></MathJax.Context>, key: "6b"},
            {text: <MathJax.Context><MathJax.Node inline>{"tan(x)"}</MathJax.Node></MathJax.Context>, key: "6c"},
            {text: <MathJax.Context><MathJax.Node inline>{"\\text{Ej definierat}"}</MathJax.Node></MathJax.Context>, key: "6d"}
        ],
        correct: 1
    },
    {
        question: <MathJax.Context><div>
            Spökplumpen har en sexsidig viktad fusktärning. Låt X vara slumpvariabeln för tärningens utfall. Då gäller att
            <MathJax.Node>{"P(X = x) = \\begin{cases} 3/20,  & \\text{för x = 1, 2, 3, 4} \\\\ 1/5, & \\text{för x = 5, 6} \\end{cases}"}</MathJax.Node>
            Ange väntevärdet <MathJax.Node inline>{"\\mathbb{E}X"}</MathJax.Node> och variansen <MathJax.Node inline>{"Var(X)"}</MathJax.Node>.
        </div></MathJax.Context>,
        key: "Q7",
        category: "statistics",
        answers: [
            {text: <MathJax.Context><MathJax.Node inline>{"\\mathbb{E}X = 3.5, Var(X) = 3.2"}</MathJax.Node></MathJax.Context>, key: "7a"},
            {text: <MathJax.Context><MathJax.Node inline>{"\\mathbb{E}X = 3.7, Var(X) = 3.01"}</MathJax.Node></MathJax.Context>, key: "7b"},
            {text: <MathJax.Context><MathJax.Node inline>{"\\mathbb{E}X = 3.2, Var(X) = 2.5"}</MathJax.Node></MathJax.Context>, key: "7c"},
            {text: <MathJax.Context><MathJax.Node inline>{"\\mathbb{E}X = 3.9, Var(X) = 2.8"}</MathJax.Node></MathJax.Context>, key: "7d"}
        ],
        correct: 1
    },
    {
        question: <MathJax.Context><div>
            Låt <MathJax.Node inline>{"A = \\begin{pmatrix} 2 & -2 & 0 \\\\ -1 & 5 & 1 \\\\ 3 & 4 & 5 \\end{pmatrix}"}</MathJax.Node>, ange <MathJax.Node inline>{"det(A)"}</MathJax.Node>.
        </div></MathJax.Context>,
        key: "Q8",
        category: "linalg",
        answers: [
            {text: <MathJax.Context>
                <MathJax.Node inline>{"det(A) = 34"}</MathJax.Node>
            </MathJax.Context>, key: "8a"},
            {text: <MathJax.Context>
                <MathJax.Node inline>{"det(A) = 32"}</MathJax.Node>
            </MathJax.Context>, key: "8b"},
            {text: <MathJax.Context>
                <MathJax.Node inline>{"det(A) = 26"}</MathJax.Node>
            </MathJax.Context>, key: "8c"},
            {text: <MathJax.Context>
                <MathJax.Node inline>{"det(A) = 40"}</MathJax.Node>
            </MathJax.Context>, key: "8d"}
        ],
        correct: 2
    },
];

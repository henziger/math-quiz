import React from 'react';
import MathJax from 'react-mathjax'

export const questions = [
    {
        question: <MathJax.Provider><div>
            Vad är derivatan av <MathJax.Node inline formula={"sin(x)"}/>?
        </div></MathJax.Provider>,
        key: "Q1",
        category: "calculus",
        answers: [
            {text: <MathJax.Provider><MathJax.Node inline formula={"cos(x)"}/></MathJax.Provider>, key: "1a"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"-sin(x)"}/></MathJax.Provider>, key: "1b"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"tan(x)"}/></MathJax.Provider>, key: "1c"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"-cos(x)"}/></MathJax.Provider>, key: "1d"}
        ],
        correct: 0
    },
    {
        question: <MathJax.Provider><div>
            Bestäm den lösning till differentialekvationen
            <MathJax.Node formula={"y'' + 2y' - 8y = (5x + 6)e^{x},"}/>
            som uppfyller <MathJax.Node inline formula={"y(0) = 0"}/> och <MathJax.Node inline formula={"y'(0) = 1"}/>.
        </div></MathJax.Provider>,
        key: "Q2",
        category: "diffeq",
        answers: [
            {text: <MathJax.Provider><MathJax.Node inline formula={"y = 2e^{x} - (x + 2)e^{x}"}/></MathJax.Provider>, key: "2a"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"y = e^{2x} - (x + 1)e^{x}"}/></MathJax.Provider>, key: "2b"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"y = 2e^{2x} - (x + 2)e^{2x}"}/></MathJax.Provider>, key: "2c"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"y = 2e^{2x} - (x + 2)e^{x}"}/></MathJax.Provider>, key: "2d"}
        ],
        correct: 3
    },
    {
        question: <MathJax.Provider><div>
            Låt <MathJax.Node inline formula={"A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 3 & 5 & 7 \\\\ 9 & 7 & 3 \\end{pmatrix}"}/>, ange <MathJax.Node inline formula={"A^{T}"}/>.
        </div></MathJax.Provider>,
        key: "Q3",
        category: "linalg",
        answers: [
            {text: <MathJax.Provider>
                <MathJax.Node inline formula={"A^{T} = \\begin{pmatrix} 1 & 2 & 1 \\\\ 7 & 5 & 3 \\\\ 3 & 7 & 9 \\end{pmatrix}"}/>
            </MathJax.Provider>, key: "3a"},
            {text: <MathJax.Provider>
                <MathJax.Node inline formula={"A^{T} = \\begin{pmatrix} 9 & 7 & 3 \\\\ 2 & 5 & 7 \\\\ 1 & 3 & 9 \\end{pmatrix}"}/>
            </MathJax.Provider>, key: "3b"},
            {text: <MathJax.Provider>
                <MathJax.Node inline formula={"A^{T} = \\begin{pmatrix} 1 & 3 & 9 \\\\ 2 & 5 & 7 \\\\ 1 & 7 & 3 \\end{pmatrix}"}/>
            </MathJax.Provider>, key: "3c"},
            {text: <MathJax.Provider>
                <MathJax.Node inline formula={"A^{T} = \\begin{pmatrix} 9 & 3 & 1 \\\\ 7 & 5 & 2 \\\\ 3 & 7 & 1 \\end{pmatrix}"}/>
            </MathJax.Provider>, key: "3d"}
        ],
        correct: 2
    },
    {
        question: <MathJax.Provider><div>
            Ange alla positiva heltal <MathJax.Node inline formula={"(x, y)"}/> sådana att <MathJax.Node inline formula={"198x + 77y = 3476."}/>
        </div></MathJax.Provider>,
        category: "discrete",
        key: "Q4",
        answers: [
            {text: <MathJax.Provider><div><MathJax.Node inline formula={"(x, y) = (15, 5), (10, 21)"}/> och <MathJax.Node inline formula={"(3, 39)"}/></div></MathJax.Provider>, key: "4a"},
            {text: <MathJax.Provider><div><MathJax.Node inline formula={"(x, y) = (17, 3), (11, 23)"}/> och <MathJax.Node inline formula={"(3, 41)"}/></div></MathJax.Provider>, key: "4b"},
            {text: <MathJax.Provider><div><MathJax.Node inline formula={"(x, y) = (19, 2), (8, 24)"}/> och <MathJax.Node inline formula={"(2, 42)"}/></div></MathJax.Provider>, key: "4c"},
            {text: <MathJax.Provider><div><MathJax.Node inline formula={"(x, y) = (16, 4), (9, 22)"}/> och <MathJax.Node inline formula={"(2, 40)"}/></div></MathJax.Provider>, key: "4d"}
        ],
        correct: 3
    },
    {
        question:  <MathJax.Provider><div>
            Beräkna dubbelintegralen
            <MathJax.Node formula={"\\int\\int_D (2x^{2} + y^{2}+ 1) dxdy,"}/>
            där <MathJax.Node inline formula={"D"}/> är området som ges av <MathJax.Node inline formula={"x^{2} + y^{2} \\le 4"}/> och <MathJax.Node inline formula={"x \\le y"}/>
            .</div></MathJax.Provider>,
        key: "Q5",
        category: "multicalc",
        answers: [
            {text: <MathJax.Provider><MathJax.Node inline formula={"3"}/></MathJax.Provider>, key: "5a"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"5"}/></MathJax.Provider>, key: "5b"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"4\\pi"}/></MathJax.Provider>, key: "5c"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"8\\pi"}/></MathJax.Provider>, key: "5d"}
        ],
        correct: 3
    },
    {
        question: <MathJax.Provider><div>
            Vad är derivatan av <MathJax.Node inline formula={"ln(x)"}/>?
        </div></MathJax.Provider>,
        key: "Q6",
        category: "calculus",
        answers: [
            {text: <MathJax.Provider><MathJax.Node inline formula={"x^{e}"}/></MathJax.Provider>, key: "6a"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"\\frac{1}{x}"}/></MathJax.Provider>, key: "6b"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"tan(x)"}/></MathJax.Provider>, key: "6c"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"\\text{Ej definierat}"}/></MathJax.Provider>, key: "6d"}
        ],
        correct: 1
    },
    {
        question: <MathJax.Provider><div>
            Spökplumpen har en sexsidig viktad fusktärning. Låt X vara slumpvariabeln för tärningens utfall. Då gäller att
            <MathJax.Node formula={"P(X = x) = \\begin{cases} 3/20,  & \\text{för x = 1, 2, 3, 4} \\\\ 1/5, & \\text{för x = 5, 6} \\end{cases}"}/>

            Ange väntevärdet <MathJax.Node inline formula={"\\mathbb{E}X"}/> och variansen <MathJax.Node inline formula={"Var(X)"}/>.
        </div></MathJax.Provider>,
        key: "Q7",
        category: "statistics",
        answers: [
            {text: <MathJax.Provider><MathJax.Node inline formula={"\\mathbb{E}X = 3.5, Var(X) = 3.2"}/></MathJax.Provider>, key: "7a"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"\\mathbb{E}X = 3.7, Var(X) = 3.01"}/></MathJax.Provider>, key: "7b"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"\\mathbb{E}X = 3.2, Var(X) = 2.5"}/></MathJax.Provider>, key: "7c"},
            {text: <MathJax.Provider><MathJax.Node inline formula={"\\mathbb{E}X = 3.9, Var(X) = 2.8"}/></MathJax.Provider>, key: "7d"}
        ],
        correct: 1
    },
    {
        question: <MathJax.Provider><div>
            Låt <MathJax.Node inline formula={"A = \\begin{pmatrix} 2 & -2 & 0 \\\\ -1 & 5 & 1 \\\\ 3 & 4 & 5 \\end{pmatrix}"}/>, ange <MathJax.Node inline formula={"det(A)"}/>.
        </div></MathJax.Provider>,
        key: "Q8",
        category: "linalg",
        answers: [
            {text: <MathJax.Provider>
                <MathJax.Node inline formula={"det(A) = 34"}/>
            </MathJax.Provider>, key: "8a"},
            {text: <MathJax.Provider>
                <MathJax.Node inline formula={"det(A) = 32"}/>
            </MathJax.Provider>, key: "8b"},
            {text: <MathJax.Provider>
                <MathJax.Node inline formula={"det(A) = 26"}/>
            </MathJax.Provider>, key: "8c"},
            {text: <MathJax.Provider>
                <MathJax.Node inline formula={"det(A) = 40"}/>
            </MathJax.Provider>, key: "8d"}
        ],
        correct: 2
    },
];

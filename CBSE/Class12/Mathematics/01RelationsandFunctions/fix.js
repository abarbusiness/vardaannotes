const fs = require('fs');

const files = ['ChapterNotes.html', 'ClassNotes.html'];

const relationsContent = `
        <div class="practice-box" id="pp-ncert-1">
            <span class="box-label">Practice Problem — NCERT Favorite</span>
            <strong>Q:</strong> Show that the relation $R$ in the set of real numbers $\\mathbb{R}$ defined as $R = \\{(a, b) : a \\le b^2\\}$ is neither reflexive, nor symmetric, nor transitive.
            <div class="solution">
                <strong>① Not Reflexive:</strong> We need to find an $a \\in \\mathbb{R}$ such that $a \\not\\le a^2$. Let $a = \\frac{1}{2}$. Since $\\frac{1}{2} \\not\\le \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$, the pair $\\left(\\frac{1}{2}, \\frac{1}{2}\\right) \\notin R$. So, it is not reflexive. ✗<br>
                <strong>② Not Symmetric:</strong> Let $a = 1, b = 4$. We see $1 \\le 4^2$ (i.e., $1 \\le 16$), so $(1, 4) \\in R$. But $4 \\not\\le 1^2$ (i.e., $4 \\not\\le 1$), so $(4, 1) \\notin R$. So, it is not symmetric. ✗<br>
                <strong>③ Not Transitive:</strong> Let $a = 3, b = -2, c = -1$. We see $3 \\le (-2)^2$ (i.e., $3 \\le 4$), so $(3, -2) \\in R$. And $-2 \\le (-1)^2$ (i.e., $-2 \\le 1$), so $(-2, -1) \\in R$. But $3 \\not\\le (-1)^2$ (i.e., $3 \\not\\le 1$), so $(3, -1) \\notin R$. So, it is not transitive. ✗
            </div>
        </div>

        <div class="practice-box" id="pp-ncert-2">
            <span class="box-label">Practice Problem — Constructing Examples (NCERT)</span>
            <strong>Q:</strong> Give an example of a relation which is symmetric but neither reflexive nor transitive.
            <div class="solution">
                Let set $A = \\{1, 2, 3\\}$.<br>
                Let relation $R = \\{(1, 2), (2, 1)\\}$.<br>
                <strong>Check Reflexive:</strong> $(1, 1), (2, 2), (3, 3) \\notin R$. So, not reflexive. ✗<br>
                <strong>Check Symmetric:</strong> $(1, 2) \\in R$ and $(2, 1) \\in R$. No other pairs exist. So, symmetric. ✓<br>
                <strong>Check Transitive:</strong> $(1, 2) \\in R$ and $(2, 1) \\in R$. For transitivity, we must have $(1, 1) \\in R$, which is not true. So, not transitive. ✗
            </div>
        </div>
`;

const functionsContent = `
            <div class="practice-box" id="pp-ncert-3">
                <span class="box-label">Practice Problem — NCERT Classic (Modulus Function)</span>
                <strong>Q:</strong> Show that the Modulus Function $f : \\mathbb{R} \\rightarrow \\mathbb{R}$, given by $f(x) = |x|$, is neither one-one nor onto.
                <div class="solution">
                    <strong>Not One-One:</strong> $f(1) = |1| = 1$ and $f(-1) = |-1| = 1$. Since $f(1) = f(-1)$ but $1 \\neq -1$, two different inputs have the same output. Therefore, it is Many-One (not one-one). ✗<br><br>
                    <strong>Not Onto:</strong> The co-domain is $\\mathbb{R}$. However, the output of the modulus function is always non-negative ($f(x) \\ge 0$). This means negative real numbers in the co-domain (like $-2$) have no pre-image in the domain. Since the range $[0, \\infty)$ is a proper subset of the co-domain $\\mathbb{R}$, it is Into (not onto). ✗
                </div>
            </div>

            <div class="practice-box" id="pp-ncert-4">
                <span class="box-label">Practice Problem — NCERT Classic (Greatest Integer Function)</span>
                <strong>Q:</strong> Show that the Greatest Integer Function $f : \\mathbb{R} \\rightarrow \\mathbb{R}$, given by $f(x) = [x]$, is neither one-one nor onto, where $[x]$ denotes the greatest integer less than or equal to $x$.
                <div class="solution">
                    <strong>Not One-One:</strong> Consider $x_1 = 1.2$ and $x_2 = 1.5$. Both are in $\\mathbb{R}$.<br>
                    $f(1.2) = [1.2] = 1$ and $f(1.5) = [1.5] = 1$. Since $f(1.2) = f(1.5)$ but $1.2 \\neq 1.5$, the function is Many-One. ✗<br><br>
                    <strong>Not Onto:</strong> The co-domain is $\\mathbb{R}$. The range of $f(x) = [x]$ is the set of integers $\\mathbb{Z}$. Thus, non-integers in the co-domain (e.g., $1.5, 0.7$) do not have any pre-image in the domain. ✗
                </div>
            </div>
`;

for (let file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Clean up the broken insertions
        content = content.replace(/<div class="practice-box" id="pp-ncert-1">[\s\S]*?<div class="practice-box" id="pp-ncert-2">[\s\S]*?<\/div>\s*<\/div>\s*/g, '');
        content = content.replace(/<div class="practice-box" id="pp-ncert-3">[\s\S]*?<div class="practice-box" id="pp-ncert-4">[\s\S]*?<\/div>\s*<\/div>\s*/g, '');

        // Now safe insert using string replacement without $ evaluations
        content = content.replace(/(<h2 id="equivalence-relations">)/, (match) => {
            return relationsContent + '\\n        ' + match;
        });

        content = content.replace(/(<div class="practice-box" id="pp9">[\s\S]*?<\/div>\s*<\/div>)/, (match) => {
            return match + '\\n\\n' + functionsContent;
        });

        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed: ' + file);
    }
}

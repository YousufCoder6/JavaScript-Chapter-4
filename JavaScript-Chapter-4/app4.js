// ==========================================
// CHAPTER 4: VARIABLE NAMES: LEGAL & ILLEGAL
// ==========================================

function runQ1() {
    // Q1: Declare 3 variables in one statement
    var var1, var2, var3;
    alert("3 variables (var1, var2, var3) have been declared in one statement successfully!");
}

function runQ2() {
    // Q2: Declare 5 legal & 5 illegal variable names
    // 5 Legal Variable Names:
    var userName;
    var _age;
    var $price;
    var item1;
    var first_name;

    alert("5 Legal Variables:\n- userName\n- _age\n- $price\n- item1\n- first_name\n\n(Note: Illegal variable names like 123var, my-name, etc. cause syntax errors so they are kept as code examples).");
}

function runQ3() {
    // Q3: Display rules in your browser
    document.write("<h1>Chapter 4 - Q3 Rules Output</h1>");
    document.write("<h2>Rules for naming JS variables</h2>");
    document.write("Variable names can only contain <b>numbers</b>, <b>$</b>, <b>_</b> and <b>letters</b>. For example $my_1stVariable<br>");
    document.write("Variables must begin with a <b>letter</b>, <b>$</b> or <b>_</b>. For example $name, _name or name<br>");
    document.write("Variable names are case <b>sensitive</b><br>");
    document.write("Variable names should not be JS <b>keywords</b><br><br>");
    document.write("<a href='chapter4.html'>Go Back</a>");
}
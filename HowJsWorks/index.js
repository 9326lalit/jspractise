// A.Parsing Phase
// 1.Lexical analysis.
// Lexical analysis,also known as a lexer, is the first 
// step in the process of compiling of JS program.It breaks
// the program down into tokens, which are the basic building blocks of the language.


// 2.Syntax analysis.
// Takes the stream of tokens from lexical analysis and checks
// them for correct syntax.If the syntax is correct,
// syntax analysis generates a tree-like structure called a parse tree or 
// abstrack syntax tree(AST).The AST represents the hierarchical sturture of the program.


// B.Compilation(JIT-Just-In-Time Compilation)
// After the AST is created,the JS engine typically goes through a compilation phase.
// modern engines like v8 chrome,spidermonkey in fireforx,or JS in safari,this compilation often involves a combination of two approaches.

// parse and compile:The engine parses the code and compiles it into an intermidate form,such as bytecode or machine code.

// JIT -> where intermidate code is compile just before execution.
// This allows the engine to optimize the code based on runtime information,improving performance.

// C.Execution :
// Once code is compiled,the JS engine executes it.
// During exectuion,the engine creates execution contexts,manages the scope chain, handles variable assignments,and calls funciton.
// The execution context consists of two phases:
// The creation phase(where variables and functions are hoisted) and the execution phase(where the code is acutally run).

// The JS engine uses a call stack to keep track of the execution context.When a function is called
// a new frame is added to the stack, and when the function completes, its frame is removed-(LIFO)->Last In,First Out.


// MOre on inside execution phase
// call stack-->
// Heap Memory -->
// The heap memory is where dynamically allocated memory resides.This is where objects,closures,and
// other dynamically allocated data are stored.While the call stack manages the flow of execution and function contexts.The heap
// memory holds data that is referenced by these execution contexts.

document.addEventListener("DOMContentLoaded", () => {
    const debugButton = document.querySelector(".debug-btn");
    const codeEditor = document.querySelector("#codeEditor");
    const aiResponse = document.querySelector("#aiResponse");

    debugButton.addEventListener("click", () => {
        const userCode = codeEditor.value.trim();
        
        if (userCode === "") {
            aiResponse.innerText = "⚠️ Please enter some JavaScript code to debug!";
            return;
        }

        aiResponse.innerText = "🔍 Analyzing your code...";

        // Simulating AI Debugging Response (Replace this with API call)
        setTimeout(() => {
            const mockResponse = generateMockDebuggingResponse(userCode);
            aiResponse.innerText = mockResponse;
        }, 2000);
    });
});

// Mock AI Response Generator
function generateMockDebuggingResponse(code) {
    if (code.includes("console.log")) {
        return "✅ Your code looks fine! Remember to remove console.log statements in production.";
    } else if (code.includes("function") && !code.includes("return")) {
        return "⚠️ Your function is missing a return statement. Double-check your logic!";
    } else {
        return "🚀 No syntax errors found! Always test in a real browser or Node.js.";
    }
}

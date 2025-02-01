function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        
        
        document.head.appendChild(script);
    });
}
function browser(){
 
 
(async () => {
    await loadScript("/stability/browser/browser.js");
    await loadScript("/stability/browser/data.js");
    await loadScript("/stability/browser/memory.js");
    await loadScript("/stability/aprimoramento.js"); 
    await loadScript("/stability/browser/web.js");
    
})();

}

browser()


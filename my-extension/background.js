// background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'getUrlAnalysis') {
      const urlAnalysisData = {
        url: sender.tab.url,
        isPhishing: false, // Replace with your analysis logic
        analysisDate: new Date().toISOString(),
      };
      // Store data in extension storage
      chrome.storage.local.set({ urlAnalysis: urlAnalysisData });
      sendResponse(urlAnalysisData);
    }
  });
  
/**
 * General utility functions
 */

(function() {
    'use strict';
    
    /**
     * Main initialization function
     */
    function init() {
        logMessage("Hello, World!");
    }
    
    /**
     * Logs a message to the console with timestamp
     * @param {string} message - The message to log
     */
    function logMessage(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
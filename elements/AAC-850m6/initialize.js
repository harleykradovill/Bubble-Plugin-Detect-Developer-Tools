function(instance, context) {
    function isDevToolsOpen() {
        const threshold = 160;
        let widthThreshold = window.outerWidth - window.innerWidth > threshold;
        let heightThreshold = window.outerHeight - window.innerHeight > threshold;
        return widthThreshold || heightThreshold;
    }

    function checkDevTools() {
        if (isDevToolsOpen()) {
            instance.publishState('detected', true);
            instance.triggerEvent('detected');
        } else {
            instance.publishState('detected', false);
        }
    }

    instance.data.devToolsCheckInterval = setInterval(checkDevTools, 1000); // Check every second
}

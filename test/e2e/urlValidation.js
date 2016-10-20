describe('instaBug Task: URL validation', function() {
    it('should redirect home to /', function() {
        browser.get('/home');
        expect(browser.getCurrentUrl()).toBe('http://localhost:9001/');
    });
    it('should redirect invalid urls /', function() {
        browser.get('/invalid_state');
        expect(browser.getCurrentUrl()).toBe('http://localhost:9001/');
    });
    it('should remove traling slashes', function() {
        browser.get('/about/');
        expect(browser.getCurrentUrl()).toBe('http://localhost:9001/about');
    });
});

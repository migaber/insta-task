describe('instaBug Task: Static Pages', function() {
    beforeEach(function() {
        //
    });

    it('load home', function() {
        browser.get('/');
        expect(element(by.css('body')).getText()).toContain('Home');
    });

    it('load about', function() {
        browser.get('/about');
        expect(element(by.css('body')).getText()).toContain('About Page');
    });
});

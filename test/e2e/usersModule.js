describe('instaBug Task: Users Page', function() {
    it('should load users list', function() {
        browser.get('/users');
        var users = element(by.css('.users-list')).all(by.css('.listItem'));
        expect(element(by.css('.users-list')).all(by.css('listItem')).count()).toBe(0);
    });

    it('should load more users', function() {
        browser.get('/users');
        element(by.css('.button--more')).click().then(function() {
            expect(element(by.css('.users-list')).all(by.repeater('user in users')).count()).toBe(60);
        });
    });

    it('should load spesific user', function() {
        browser.get('/users/wycats');
        expect(element(by.css('.profile__title a')).getText()).toBe('@wycats');
    });
});

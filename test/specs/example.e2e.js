describe('My Desk Booking application', () => {
    it('should book a desk', async () => {


        let email = 'YOUR EMAIL'
        let password = 'YOUR PASS'
        let desk = 'YOUR DESK'
        
        await browser.url(`https://deliveryhero.officespacesoftware.com/visual-directory/floors/15/seats/` + desk);

        await $('#okta-signin-username').setValue(email);
        await $('#okta-signin-password').setValue(password);
        await $('#okta-signin-submit').click();    


        let bookButton = '//*[text()="Book Desk"]';
        let dismissButton = '/html/body/div[2]/div[3]/div/div[3]/button[2]';
        let dateTab = '//*[@id="dynamicDockingLayer"]/div/div[2]/div/div/button[2]';
        let selectDate = '//*[@id="dynamicDockingLayer"]/div/div[3]/div[2]/div[1]/button';
        let tomorrow = '//*[@id="dynamicDockingLayer"]/div/div[3]/div[2]/div[1]/div[1]/div/button[3]';
        
        await expect($(bookButton)).toBeExisting();

        for (let index = 0; index < 7; index++) {

            await $(dateTab).waitForClickable({ timeout: 3000 });
            await $(dateTab).click();

            for (let i = 0; i < index; i++) {
                await $(tomorrow).waitForClickable({ timeout: 3000 });
                await $(tomorrow).click();                
            }
    
            await $(selectDate).waitForClickable({ timeout: 3000 });
            await $(selectDate).click();
            
            await $(bookButton).waitForClickable({ timeout: 3000 });
            await $(bookButton).click();
    
            await $(dismissButton).waitForClickable({ timeout: 3000 });
            await $(dismissButton).click();
        }
    });
});

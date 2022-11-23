export const environment = {
    production: true,
    newsSource: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1fba2bc8d1b9461bbc31d2fc0efc6962',
    clientId: 'f18b4dc4-a2c6-4df1-97d4-8e24bcc1a342',
    loginRedirectUri: 'https://login.microsoftonline.com/40d05a0d-8aeb-415d-96a1-8722f450a418',
    appRedirectUri: 'https://nsi-dev-ui-foxtrot.azurewebsites.net/',
    // environment: 'DEV',
    protected: [
        ["https://graph.microsoft.com/v1.0/me", "user.read"],
        ["https://graph.microsoft.com/User.ReadBasic.All", "user.readbasic.all"],
        ['https://nsi-dev-api-foxtrot.azurewebsites.net/api/*', 'user.read'],
    ],
};

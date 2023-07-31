## Features
~Google login/logout buttons

**Below features can be seen in console**

~JWT profile encoding

~Profile view


## Getting Started

First, make an Google OAuth client ID Web App after reaching
the google APIs & Services site in the [Google Developers Console](https://console.cloud.google.com/apis/dashboard).

![gogo.PNG](..%2F..%2F..%2FDownloads%2Fgogo.PNG)

Second, navigate to the OAuth consent screen, set authorized
domains to google.com, and your developer contact information.


Then navigate to the SCOPES page and only use the non-sensitive SCOPES

![scopes.PNG](..%2F..%2F..%2FDownloads%2Fscopes.PNG)

Now, go back to the credentials tab, copy the webapp clientid
and paste it into the src app.jsx/ components, login.jsx and logout.jsx placeholders
``` bash
const clientId = "Google_client_id";
```

Finally run the following commands in the project terminal to run the web app example,

``` bash
npm install
cd vite-project
npm run dev
```

And there you have it an working Google auth application!

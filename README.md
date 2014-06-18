wordgraph
=========

A small app built in 24 hours that uses d3/c3.js to display the most commonly used words in a Facebook conversation. Uses Facebook OAuth (client-side) to log in. Requires access to user's messages. Makes Graph API v2.0 calls to get messages, then uses jQuery/Javascript to parse JSON data and feed into the visualization.

##Usage
- Go to wordgraph.azurewebsites.net
- Log in with Facebook using the login button
- Go to Facebook and grab a conversation ID by going to your messages, and grabbing it from the URL bar (this part is a bit tacky)
- Paste the conversation ID into the box
- Hit go!
- Give it some time as it pulls in the data.
- See what words are most popular!

##Known limitations/bugs
- Breaks on conversations longer than about 50 pages (Facebook API rate limit)
- Only works for conversation groups (1 on 1 conversations don't work)
- You may need to click log-in twice, once before and once after you plug in a conversation ID

##Links to screenshots
Main UI: https://fbcdn-photos-e-a.akamaihd.net/hphotos-ak-xfa1/t39.2082-0/10173506_255734517944448_1931800983_n.png

Visualization: https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xfp1/t39.2082-0/10173496_255734571277776_607879005_n.png

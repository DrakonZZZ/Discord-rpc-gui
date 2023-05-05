import { userDetail } from './userDetails.js';
import discordRpc from 'discord-rpc';

const clientID = '280984871685062656';

const rpc = new discordRpc.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  rpc.setActivity({
    details: userDetail.details,
    state: userDetail.state,
    startTimestamp: new Date(),
    largeImageKey: userDetail.largeImageKey,
    largeImageText: userDetail.largeImageText,
    smallImageKey: userDetail.smallImageKey,
    smallImageText: userDetail.smallImageKey,
    buttons: [userDetail.buttonText],
  });

  console.log('Rich Presence is working');
});

rpc.login({ clientID }).catch(console.error);

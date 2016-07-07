import {Injectable} from '@angular/core';
import {Page, Platform} from 'ionic-angular';

@Injectable()
export class FbProvider {
    private _plugin = (window as any).facebookConnectPlugin;
    
    constructor(public platform: Platform ) {
    }

    login() {
        let p = new Promise((resolve, reject) => {
            
        if(this.platform.is('cordova')) {
            this._plugin.login(['email'], (success) => {
                    console.log(JSON.stringify(success));
                    resolve(success);
                },(err) => {
                    console.log(JSON.stringify(err));
                    reject(err);
                });
            
            } else {
                console.log("Please run me on a device");
                reject('Please run me on a device');
            }
        });
        return p;
    }
   
    getCurrentUserProfile() {
        let p = new Promise((resolve, reject) => {
            this._plugin.api('me?fields=email,name', null,
            (profileData) => {
                console.log(JSON.stringify(profileData));
                resolve(profileData);
            },(err) => {
                console.log(JSON.stringify(err));
                reject(err);
            });
        });
        return p;
    }
}

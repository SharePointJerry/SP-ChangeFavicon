import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'ChangefaviconApplicationCustomizerStrings';

const LOG_SOURCE: string = 'ChangefaviconApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IChangefaviconApplicationCustomizerProperties {
  // This is an example; replace with your own property
  //testMessage: string;
  favicon:string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ChangefaviconApplicationCustomizer
  extends BaseApplicationCustomizer<IChangefaviconApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {  
    let url: string = this.properties.favicon;
    if (!url) {
      Log.info(LOG_SOURCE, 'Icon URL was not provided.');
    }else{
      var link = document.querySelector("link[rel*='icon']") as HTMLElement || document.createElement('link') as HTMLElement;
      link.setAttribute('type', 'image/x-icon');
      link.setAttribute('rel', 'shortcut icon');
      link.setAttribute('href', url);
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    return Promise.resolve();
  }
}

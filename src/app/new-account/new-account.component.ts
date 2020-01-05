import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import { AccountsService } from '../account/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent{

  //LoggingService constructor injection nolonger necessary when using service injection, just left in here for reference sake
  constructor(private logServ: LoggingService, private accServ: AccountsService){
    this.accServ.statusUpdated.subscribe((stats: string)=>alert('New status: ' + stats));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
 this.accServ.addAccount(accountName, accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
   // this.logServ.logStatusChange(accountStatus);
  }
}

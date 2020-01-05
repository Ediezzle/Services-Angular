import { Component, Input } from '@angular/core';
import {LoggingService} from '../logging.service';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  private logServ;
  private accServ;

  //LoggingService constructor injection nolonger necessary when using service injection, just left in here for reference sake
  constructor(aLogServ: LoggingService, accServ: AccountsService){
    this.logServ=aLogServ;
    this.accServ=accServ;
  }


  onSetTo(status: string) {
    //console.log('A server status changed, new status: ' + status);
   // this.logServ.logStatusChange(status);
    this.accServ.updateStatus(this.id, status);
    this.accServ.statusUpdated.emit(status);
    
  }
  

}

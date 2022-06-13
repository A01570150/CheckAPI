import { Endpoint } from './../../models/endpoint';
import { Component, OnInit, Output,EventEmitter, ViewContainerRef, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { endpointSidebar } from 'src/app/models/endpointSidebar';
import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay} from '@angular/cdk/overlay';
import { Router } from '@angular/router';


@Component({
  selector: 'app-endpoint-list',
  templateUrl: './endpoint-list.component.html',
  styleUrls: ['./endpoint-list.component.css']
})
export class EndpointListComponent implements OnInit {

  // prueba con lista local de tipo EP
  DROPDOWN_LIST: Endpoint[];

  apiname = "Petstore";
  apibaseUrl = "pestore.api"

  showPanel$: boolean =true;
  @ViewChild(CdkConnectedOverlay, {static: true})
  private connectedOverlay = CdkConnectedOverlay;

  isPanelVisible: boolean = false;
  private isPanelHidden: boolean = false;
  // private isPanelHidden$: Observable<boolean>;


  @Output() outputToParent = new EventEmitter<Endpoint>();
  constructor(private service:ApiService, private route: ActivatedRoute, private focusMonitor: FocusMonitor, private router: Router) { 
    this.DROPDOWN_LIST = []
  }


  //función del overlay 

  group: any;
  endpoint:Endpoint = {} as Endpoint;
  testList:any[]=[];
  grouped: { [key: string]: endpointSidebar[] } = {};
  apiID: any;
  apiData:any;
  receivedGroupID!:number;
  hasGroups: boolean = false;
  hasEndpoints: boolean = false;


  toggleDropdown(){
    this.showPanel$ = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');
    this.apiID=id;
    this.isPanelVisible = true;
    this.getApi();
    this.getOutputGroup;
  }

  endpointGroupRedirect(id: number) {
    let route = '/addEndpoint';
    this.router.navigate([route], { queryParams: { id: id } });
  }

  getApi(){
    this.service.getApibyID(this.apiID).subscribe(resp=>{
      this.apiData = resp[0];
    });
  }

  getOutputGroup(received:any){
    this.group = received;
    this.receivedGroupID=this.group.groupID;
    console.log(this.receivedGroupID);
    this.getEndpoints(this.receivedGroupID)
    this.hasGroups = false;
  }

  getEndpoints(groupID:any){
    this.service.getEndpointsByGroupID(groupID).subscribe(resp=>{
      this.DROPDOWN_LIST = resp;
      console.log(resp);
      console.log(this.DROPDOWN_LIST);
      if (this.DROPDOWN_LIST.length == 0){
        this.hasEndpoints = false;
      }else{
        this.hasEndpoints = true;
      }

    })
  }

}

import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Protocol_Activity } from './STU3_Protocol_Activity'
import { STU3_Protocol_Next } from './STU3_Protocol_Next'
import { STU3_Protocol_Precondition } from './STU3_Protocol_Precondition'

export class STU3_Protocol_Step      extends STU3_BackboneElement
{

   static def : string = 'Protocol_Step';
   name : string ;
   description : string ;
   duration : string ;
   precondition : STU3_Protocol_Precondition ;
   exit : STU3_Protocol_Precondition ;
   firstActivity : string ;
   activity : STU3_Protocol_Activity [];
   next : STU3_Protocol_Next [];
}

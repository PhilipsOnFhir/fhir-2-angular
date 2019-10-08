import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Protocol_Component } from './STU3_Protocol_Component'
import { STU3_Protocol_Detail } from './STU3_Protocol_Detail'

export class STU3_Protocol_Activity      extends STU3_BackboneElement
{

   static def : string = 'Protocol_Activity';
   alternative : string [];
   component : STU3_Protocol_Component [];
   following : string [];
   wait : string ;
   detail : STU3_Protocol_Detail ;
}

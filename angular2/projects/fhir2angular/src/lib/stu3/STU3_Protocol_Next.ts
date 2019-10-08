import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Protocol_Precondition } from './STU3_Protocol_Precondition'

export class STU3_Protocol_Next      extends STU3_BackboneElement
{

   static def : string = 'Protocol_Next';
   description : string ;
   reference : string ;
   condition : STU3_Protocol_Precondition ;
}

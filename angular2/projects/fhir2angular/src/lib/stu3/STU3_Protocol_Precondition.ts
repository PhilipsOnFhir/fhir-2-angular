import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Protocol_Condition } from './STU3_Protocol_Condition'

export class STU3_Protocol_Precondition      extends STU3_BackboneElement
{

   static def : string = 'Protocol_Precondition';
   description : string ;
   condition : STU3_Protocol_Condition ;
   intersection : STU3_Protocol_Precondition [];
   union : STU3_Protocol_Precondition [];
   exclude : STU3_Protocol_Precondition [];
}

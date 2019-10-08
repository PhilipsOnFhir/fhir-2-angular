import { STU3_ConstraintSeverityEnum } from './STU3_ConstraintSeverityEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_ElementDefinition_Constraint      extends STU3_Element
{

   static def : string = 'ElementDefinition_Constraint';
   key : string ;
   requirements : string ;
   severity : STU3_ConstraintSeverityEnum ;
   human : string ;
   expression : string ;
   xpath : string ;
   source : string ;
}

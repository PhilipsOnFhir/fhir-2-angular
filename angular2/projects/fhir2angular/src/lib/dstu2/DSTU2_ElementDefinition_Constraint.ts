import { DSTU2_ConstraintSeverityEnum } from './DSTU2_ConstraintSeverityEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Element } from './DSTU2_Element'

export class DSTU2_ElementDefinition_Constraint      extends DSTU2_Element
{

   static def : string = 'ElementDefinition_Constraint';
   key : string ;
   requirements : string ;
   severity : DSTU2_ConstraintSeverityEnum ;
   human : string ;
   xpath : string ;
}

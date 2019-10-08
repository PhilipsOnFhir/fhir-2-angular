import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ConstraintSeverityEnum } from './R4_1_ConstraintSeverityEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ElementDefinition_Constraint      extends R4_1_BackboneElement
{

   static def : string = 'ElementDefinition_Constraint';
   key : string ;
   requirements : string ;
   severity : R4_1_ConstraintSeverityEnum ;
   human : string ;
   expression : string ;
   xpath : string ;
   source : string ;
}

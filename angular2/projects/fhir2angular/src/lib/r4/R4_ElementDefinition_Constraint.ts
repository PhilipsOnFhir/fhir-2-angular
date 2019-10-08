import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ConstraintSeverityEnum } from './R4_ConstraintSeverityEnum'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ElementDefinition_Constraint      extends R4_BackboneElement
{

   static def : string = 'ElementDefinition_Constraint';
   key : string ;
   requirements : string ;
   severity : R4_ConstraintSeverityEnum ;
   human : string ;
   expression : string ;
   xpath : string ;
   source : string ;
}

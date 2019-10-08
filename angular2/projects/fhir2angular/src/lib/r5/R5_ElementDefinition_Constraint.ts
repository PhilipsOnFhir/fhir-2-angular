import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ConstraintSeverityEnum } from './R5_ConstraintSeverityEnum'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ElementDefinition_Constraint      extends R5_BackboneElement
{

   static def : string = 'ElementDefinition_Constraint';
   key : string ;
   requirements : string ;
   severity : R5_ConstraintSeverityEnum ;
   human : string ;
   expression : string ;
   xpath : string ;
   source : string ;
}

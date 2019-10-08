import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ResearchStudy_Arm      extends R5_BackboneElement
{

   static def : string = 'ResearchStudy_Arm';
   name : string ;
   type : R5_CodeableConcept ;
   description : string ;
}

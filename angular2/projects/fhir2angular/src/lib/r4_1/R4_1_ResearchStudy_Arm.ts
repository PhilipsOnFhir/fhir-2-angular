import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ResearchStudy_Arm      extends R4_1_BackboneElement
{

   static def : string = 'ResearchStudy_Arm';
   name : string ;
   type : R4_1_CodeableConcept ;
   description : string ;
}

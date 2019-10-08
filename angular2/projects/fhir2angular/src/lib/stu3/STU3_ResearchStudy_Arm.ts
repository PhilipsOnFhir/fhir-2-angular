import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ResearchStudy_Arm      extends STU3_BackboneElement
{

   static def : string = 'ResearchStudy_Arm';
   name : string ;
   code : STU3_CodeableConcept ;
   description : string ;
}

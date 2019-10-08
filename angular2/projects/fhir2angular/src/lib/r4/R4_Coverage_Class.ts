import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Coverage_Class      extends R4_BackboneElement
{

   static def : string = 'Coverage_Class';
   type : R4_CodeableConcept ;
   value : string ;
   name : string ;
}

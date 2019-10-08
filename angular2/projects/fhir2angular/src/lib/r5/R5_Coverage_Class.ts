import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Coverage_Class      extends R5_BackboneElement
{

   static def : string = 'Coverage_Class';
   type : R5_CodeableConcept ;
   value : string ;
   name : string ;
}

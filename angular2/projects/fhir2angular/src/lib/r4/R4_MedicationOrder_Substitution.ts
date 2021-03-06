import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MedicationOrder_Substitution      extends R4_BackboneElement
{

   static def : string = 'MedicationOrder_Substitution';
   type : R4_CodeableConcept ;
   reason : R4_CodeableConcept ;
}

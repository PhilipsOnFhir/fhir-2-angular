import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MedicationRequest_Substitution      extends R4_1_BackboneElement
{

   static def : string = 'MedicationRequest_Substitution';
   allowedBoolean : boolean ;
   allowedCodeableConcept : R4_1_CodeableConcept ;
   reason : R4_1_CodeableConcept ;
}

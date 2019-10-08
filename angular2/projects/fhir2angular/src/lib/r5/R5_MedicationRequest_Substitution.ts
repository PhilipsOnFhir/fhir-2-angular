import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MedicationRequest_Substitution      extends R5_BackboneElement
{

   static def : string = 'MedicationRequest_Substitution';
   allowedBoolean : boolean ;
   allowedCodeableConcept : R5_CodeableConcept ;
   reason : R5_CodeableConcept ;
}

import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'

export class MedicationRequest_Substitution      extends BackboneElement
{

   static def : string = 'MedicationRequest_Substitution';
   allowedBoolean : string ;
   allowedCodeableConcept : CodeableConcept ;
   reason : CodeableConcept ;
}

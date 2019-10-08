import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_MedicationRequest_Substitution      extends STU3_BackboneElement
{

   static def : string = 'MedicationRequest_Substitution';
   allowed : boolean ;
   reason : STU3_CodeableConcept ;
}

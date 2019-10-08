import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_MedicationPrescription_Substitution      extends DSTU2_BackboneElement
{

   static def : string = 'MedicationPrescription_Substitution';
   type : DSTU2_CodeableConcept ;
   reason : DSTU2_CodeableConcept ;
}

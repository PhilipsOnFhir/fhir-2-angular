import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_MedicationDispense_Substitution      extends DSTU2_BackboneElement
{

   static def : string = 'MedicationDispense_Substitution';
   type : DSTU2_CodeableConcept ;
   reason : DSTU2_CodeableConcept [];
   responsibleParty : DSTU2_Reference [];
}

import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_MedicationDispenseStatusEnum } from './DSTU2_MedicationDispenseStatusEnum'
import { DSTU2_MedicationDispense_DosageInstruction } from './DSTU2_MedicationDispense_DosageInstruction'
import { DSTU2_MedicationDispense_Substitution } from './DSTU2_MedicationDispense_Substitution'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'

export class DSTU2_MedicationDispense      extends DSTU2_DomainResource
{

   static def : string = 'MedicationDispense';
   identifier : DSTU2_Identifier ;
   status : DSTU2_MedicationDispenseStatusEnum ;
   patient : DSTU2_Reference ;
   dispenser : DSTU2_Reference ;
   authorizingPrescription : DSTU2_Reference [];
   type : DSTU2_CodeableConcept ;
   quantity : DSTU2_SimpleQuantity ;
   daysSupply : DSTU2_SimpleQuantity ;
   medicationCodeableConcept : DSTU2_CodeableConcept ;
   medicationReference : DSTU2_Reference ;
   whenPrepared : string ;
   whenHandedOver : string ;
   destination : DSTU2_Reference ;
   receiver : DSTU2_Reference [];
   note : string ;
   dosageInstruction : DSTU2_MedicationDispense_DosageInstruction [];
   substitution : DSTU2_MedicationDispense_Substitution ;
}

import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Medication_Content } from './DSTU2_Medication_Content'

export class DSTU2_Medication_Package      extends DSTU2_BackboneElement
{

   static def : string = 'Medication_Package';
   container : DSTU2_CodeableConcept ;
   content : DSTU2_Medication_Content [];
}

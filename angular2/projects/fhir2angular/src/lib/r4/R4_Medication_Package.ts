import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Medication_Content } from './R4_Medication_Content'

export class R4_Medication_Package      extends R4_BackboneElement
{

   static def : string = 'Medication_Package';
   container : R4_CodeableConcept ;
   content : R4_Medication_Content [];
}

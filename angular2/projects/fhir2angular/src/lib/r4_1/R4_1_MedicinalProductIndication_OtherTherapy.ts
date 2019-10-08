import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductIndication_OtherTherapy      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductIndication_OtherTherapy';
   therapyRelationshipType : R4_1_CodeableConcept ;
   medicationCodeableConcept : R4_1_CodeableConcept ;
   medicationReference : R4_1_Reference ;
}

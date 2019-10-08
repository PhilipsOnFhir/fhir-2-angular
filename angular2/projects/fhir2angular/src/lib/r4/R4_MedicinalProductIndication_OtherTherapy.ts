import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductIndication_OtherTherapy      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductIndication_OtherTherapy';
   therapyRelationshipType : R4_CodeableConcept ;
   medicationCodeableConcept : R4_CodeableConcept ;
   medicationReference : R4_Reference ;
}

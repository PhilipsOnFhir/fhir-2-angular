import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductContraindication_OtherTherapy      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductContraindication_OtherTherapy';
   therapyRelationshipType : R5_CodeableConcept ;
   medicationCodeableConcept : R5_CodeableConcept ;
   medicationReference : R5_Reference ;
}

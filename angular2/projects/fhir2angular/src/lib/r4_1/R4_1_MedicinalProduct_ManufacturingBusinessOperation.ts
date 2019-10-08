import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProduct_ManufacturingBusinessOperation      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProduct_ManufacturingBusinessOperation';
   operationType : R4_1_CodeableConcept ;
   authorisationReferenceNumber : R4_1_Identifier ;
   effectiveDate : string ;
   confidentialityIndicator : R4_1_CodeableConcept ;
   manufacturer : R4_1_Reference [];
   regulator : R4_1_Reference ;
}

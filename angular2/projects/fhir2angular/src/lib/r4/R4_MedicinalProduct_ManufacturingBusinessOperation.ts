import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProduct_ManufacturingBusinessOperation      extends R4_BackboneElement
{

   static def : string = 'MedicinalProduct_ManufacturingBusinessOperation';
   operationType : R4_CodeableConcept ;
   authorisationReferenceNumber : R4_Identifier ;
   effectiveDate : string ;
   confidentialityIndicator : R4_CodeableConcept ;
   manufacturer : R4_Reference [];
   regulator : R4_Reference ;
}

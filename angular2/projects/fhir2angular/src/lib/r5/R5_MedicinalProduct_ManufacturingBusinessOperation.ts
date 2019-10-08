import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProduct_ManufacturingBusinessOperation      extends R5_BackboneElement
{

   static def : string = 'MedicinalProduct_ManufacturingBusinessOperation';
   operationType : R5_CodeableConcept ;
   authorisationReferenceNumber : R5_Identifier ;
   effectiveDate : string ;
   confidentialityIndicator : R5_CodeableConcept ;
   manufacturer : R5_Reference [];
   regulator : R5_Reference ;
}

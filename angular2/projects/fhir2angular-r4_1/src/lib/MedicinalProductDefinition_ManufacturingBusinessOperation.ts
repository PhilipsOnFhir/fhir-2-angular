import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'

export class MedicinalProductDefinition_ManufacturingBusinessOperation      extends BackboneElement
{

   static def : string = 'MedicinalProductDefinition_ManufacturingBusinessOperation';
   operationType : CodeableConcept ;
   authorisationReferenceNumber : Identifier ;
   effectiveDate : Period ;
   confidentialityIndicator : CodeableConcept ;
   manufacturer : Reference [];
   regulator : Reference ;
}

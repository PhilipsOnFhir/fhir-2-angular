import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { ProdCharacteristic } from './ProdCharacteristic'
import { Reference } from './Reference'

export class ManufacturedItemDefinition      extends DomainResource
{

   static def : string = 'ManufacturedItemDefinition';
   manufacturedDoseForm : CodeableConcept ;
   unitOfPresentation : CodeableConcept ;
   manufacturer : Reference [];
   ingredient : Reference [];
   physicalCharacteristics : ProdCharacteristic ;
   otherCharacteristics : CodeableConcept [];
}

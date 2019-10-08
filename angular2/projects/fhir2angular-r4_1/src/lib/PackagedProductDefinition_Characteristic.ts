import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class PackagedProductDefinition_Characteristic      extends BackboneElement
{

   static def : string = 'PackagedProductDefinition_Characteristic';
   code : CodeableConcept ;
   valueCoding : Coding ;
   valueQuantity : Quantity ;
   valueString : string ;
   valueDate : string ;
   valueBoolean : boolean ;
   valueAttachment : Attachment ;
}

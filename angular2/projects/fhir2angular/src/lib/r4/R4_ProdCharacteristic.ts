import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'

export class R4_ProdCharacteristic      extends R4_BackboneElement
{

   static def : string = 'ProdCharacteristic';
   height : R4_Quantity ;
   width : R4_Quantity ;
   depth : R4_Quantity ;
   weight : R4_Quantity ;
   nominalVolume : R4_Quantity ;
   externalDiameter : R4_Quantity ;
   shape : string ;
   color : string [];
   imprint : string [];
   image : R4_Attachment [];
   scoring : R4_CodeableConcept ;
}

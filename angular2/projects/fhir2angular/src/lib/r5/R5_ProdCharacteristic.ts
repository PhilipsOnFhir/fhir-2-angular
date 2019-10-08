import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'

export class R5_ProdCharacteristic      extends R5_BackboneElement
{

   static def : string = 'ProdCharacteristic';
   height : R5_Quantity ;
   width : R5_Quantity ;
   depth : R5_Quantity ;
   weight : R5_Quantity ;
   nominalVolume : R5_Quantity ;
   externalDiameter : R5_Quantity ;
   shape : string ;
   color : string [];
   imprint : string [];
   image : R5_Attachment [];
   scoring : R5_CodeableConcept ;
}

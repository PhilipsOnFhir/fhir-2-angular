import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_ProdCharacteristic      extends R4_1_BackboneElement
{

   static def : string = 'ProdCharacteristic';
   height : R4_1_Quantity ;
   width : R4_1_Quantity ;
   depth : R4_1_Quantity ;
   weight : R4_1_Quantity ;
   nominalVolume : R4_1_Quantity ;
   externalDiameter : R4_1_Quantity ;
   shape : string ;
   color : string [];
   imprint : string [];
   image : R4_1_Attachment [];
   scoring : R4_1_CodeableConcept ;
}

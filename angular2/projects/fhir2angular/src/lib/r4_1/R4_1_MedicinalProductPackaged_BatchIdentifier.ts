import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'

export class R4_1_MedicinalProductPackaged_BatchIdentifier      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductPackaged_BatchIdentifier';
   outerPackaging : R4_1_Identifier ;
   immediatePackaging : R4_1_Identifier ;
}

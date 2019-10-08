import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'

export class R4_MedicinalProductPackaged_BatchIdentifier      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductPackaged_BatchIdentifier';
   outerPackaging : R4_Identifier ;
   immediatePackaging : R4_Identifier ;
}

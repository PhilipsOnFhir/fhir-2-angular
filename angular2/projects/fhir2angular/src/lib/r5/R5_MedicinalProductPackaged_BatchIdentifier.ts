import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'

export class R5_MedicinalProductPackaged_BatchIdentifier      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductPackaged_BatchIdentifier';
   outerPackaging : R5_Identifier ;
   immediatePackaging : R5_Identifier ;
}
